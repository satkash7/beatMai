<?php
// Connexion à la base de données
$host = 'localhost';
$dbname = 'beatexpertise24_beat';
$username = 'beatexpertise24_sat';
$password = 'Mamaema28';

try {
    $conn = new PDO("mysql:host=$host;dbname=$dbname", $username, $password);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    echo json_encode(['status' => 'error', 'message' => 'Erreur de connexion à la base de données']);
    exit();
}

// Récupération des données du formulaire
$nom_ong = $_POST['nom_ong'] ?? '';
$rayon_action = $_POST['rayon_action'] ?? '';
$siege_social = $_POST['siege_social'] ?? '';
$telephone = $_POST['telephone'] ?? '';
$email = $_POST['email'] ?? '';
$annee_anciennete = $_POST['annee_anciennete'] ?? 0;
$numero_f92 = $_POST['numero_f92'] ?? '';
$budget_annuel = $_POST['budget_annuel'] ?? 0;
$titre_projet = $_POST['titre_projet'] ?? '';

// Récupération des cases à cocher (tableaux)
$domaines = $_POST['domaines'] ?? [];
$sujets = $_POST['sujets'] ?? [];

// Convertir les tableaux en chaînes séparées par des virgules
$domaines_projet = implode(', ', $domaines);
$sujets_renforcement = implode(', ', $sujets);

// Initialisation des champs conditionnels
$premier_plan_strategique = null;
$periode_plan_strategique = null;
$premier_plan_mobilisation = null;
$periode_plan_mobilisation = null;

// Vérifier si le sujet 3 est coché
if (in_array('Elaboration plans strategiques et mobilisation fonds', $sujets)) {
    $premier_plan_strategique = $_POST['premier_plan_strategique'] ?? null;
    $premier_plan_mobilisation = $_POST['premier_plan_mobilisation'] ?? null;
    
    if ($premier_plan_strategique === 'non') {
        $periode_plan_strategique = $_POST['periode_plan_strategique'] ?? null;
        if (!preg_match('/^\d{4}-\d{4}$/', $periode_plan_strategique)) {
            echo json_encode(['status' => 'error', 'message' => 'Format de période invalide pour le plan stratégique']);
            exit();
        }
    }
    
    if ($premier_plan_mobilisation === 'non') {
        $periode_plan_mobilisation = $_POST['periode_plan_mobilisation'] ?? null;
        if (!preg_match('/^\d{4}-\d{4}$/', $periode_plan_mobilisation)) {
            echo json_encode(['status' => 'error', 'message' => 'Format de période invalide pour la mobilisation des fonds']);
            exit();
        }
    }
}

try {
    $stmt = $conn->prepare("
        INSERT INTO ong_demandes (
            nom_ong, rayon_action, siege_social, telephone, email,
            annee_anciennete, numero_f92, budget_annuel, titre_projet, 
            domaines_projet, sujets_renforcement, premier_plan_strategique, 
            periode_plan_strategique, premier_plan_mobilisation, 
            periode_plan_mobilisation
        ) VALUES (
            :nom_ong, :rayon_action, :siege_social, :telephone, :email,
            :annee_anciennete, :numero_f92, :budget_annuel, :titre_projet, 
            :domaines_projet, :sujets_renforcement, :premier_plan_strategique, 
            :periode_plan_strategique, :premier_plan_mobilisation, 
            :periode_plan_mobilisation
        )
    ");
    
    // Liaison des paramètres
    $stmt->bindParam(':nom_ong', $nom_ong);
    $stmt->bindParam(':rayon_action', $rayon_action);
    $stmt->bindParam(':siege_social', $siege_social);
    $stmt->bindParam(':telephone', $telephone);
    $stmt->bindParam(':email', $email);
    $stmt->bindParam(':annee_anciennete', $annee_anciennete, PDO::PARAM_INT);
    $stmt->bindParam(':numero_f92', $numero_f92);
    $stmt->bindParam(':budget_annuel', $budget_annuel);
    $stmt->bindParam(':titre_projet', $titre_projet);
    $stmt->bindParam(':domaines_projet', $domaines_projet);
    $stmt->bindParam(':sujets_renforcement', $sujets_renforcement);
    $stmt->bindParam(':premier_plan_strategique', $premier_plan_strategique);
    $stmt->bindParam(':periode_plan_strategique', $periode_plan_strategique);
    $stmt->bindParam(':premier_plan_mobilisation', $premier_plan_mobilisation);
    $stmt->bindParam(':periode_plan_mobilisation', $periode_plan_mobilisation);
    
    $stmt->execute();

    echo json_encode(['status' => 'success', 'message' => 'Votre demande a été soumise avec succès !']);
} catch (PDOException $e) {
    error_log("Erreur base de données: " . $e->getMessage());
    echo json_encode(['status' => 'error', 'message' => 'Une erreur est survenue lors de la soumission de votre demande.']);
}
?>