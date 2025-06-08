<?php
// Validation des entrées
function sanitizeInput($data) {
    return htmlspecialchars(strip_tags(trim($data)));
}

foreach ($_POST as $key => $value) {
    $_POST[$key] = is_array($value) ? array_map('sanitizeInput', $value) : sanitizeInput($value);
}

// Validation numérique
if (!is_numeric($ong_anciennete) || !is_numeric($ong_budget)) {
    echo json_encode(['status' => 'error', 'message' => 'Les champs numériques sont invalides']);
    exit();
}

// Connexion à la base de données (mêmes paramètres que votre script existant)
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
$ong_nom = $_POST['ong_nom'];
$ong_rayon = $_POST['ong_rayon'];
$ong_siege = $_POST['ong_siege'];
$ong_anciennete = $_POST['ong_anciennete'];
$ong_f92 = $_POST['ong_f92'];
$ong_budget = $_POST['ong_budget'];
$ong_projet_titre = $_POST['ong_projet_titre'];
$ong_projet_domaine = $_POST['ong_projet_domaine'];
$sujets = isset($_POST['sujet']) ? implode(", ", $_POST['sujet']) : "";

// Champs conditionnels pour les plans stratégiques
$premier_plan_strategique = $_POST['premier_plan_strategique'] ?? null;
$annee_plan_strategique = isset($_POST['annee_plan_strategique']) ? 
    sanitizeInput($_POST['annee_plan_strategique']) : null;
$premier_plan_mobilisation = $_POST['premier_plan_mobilisation'] ?? null;
$annee_plan_mobilisation = $_POST['annee_plan_mobilisation'] ?? null;

// Validation basique
if (empty($ong_nom) || empty($ong_rayon) || empty($ong_siege)) {
    echo json_encode(['status' => 'error', 'message' => 'Les champs obligatoires ne sont pas remplis']);
    exit();
}

// Insertion des données dans la base de données
try {
    $stmt = $conn->prepare("
        INSERT INTO ong_manifestations (
            nom, rayon_action, siege_social, anciennete, numero_f92, budget_annuel, 
            projet_titre, projet_domaine, sujets_renforcement, 
            premier_plan_strategique, annee_plan_strategique, 
            premier_plan_mobilisation, annee_plan_mobilisation,
            date_soumission
        ) VALUES (
            :nom, :rayon_action, :siege_social, :anciennete, :numero_f92, :budget_annuel, 
            :projet_titre, :projet_domaine, :sujets_renforcement, 
            :premier_plan_strategique, :annee_plan_strategique, 
            :premier_plan_mobilisation, :annee_plan_mobilisation,
            NOW()
        )
    ");
    
    $stmt->bindParam(':nom', $ong_nom);
    $stmt->bindParam(':rayon_action', $ong_rayon);
    $stmt->bindParam(':siege_social', $ong_siege);
    $stmt->bindParam(':anciennete', $ong_anciennete);
    $stmt->bindParam(':numero_f92', $ong_f92);
    $stmt->bindParam(':budget_annuel', $ong_budget);
    $stmt->bindParam(':projet_titre', $ong_projet_titre);
    $stmt->bindParam(':projet_domaine', $ong_projet_domaine);
    $stmt->bindParam(':sujets_renforcement', $sujets);
    $stmt->bindParam(':premier_plan_strategique', $premier_plan_strategique);
    $stmt->bindParam(':annee_plan_strategique', $annee_plan_strategique);
    $stmt->bindParam(':premier_plan_mobilisation', $premier_plan_mobilisation);
    $stmt->bindParam(':annee_plan_mobilisation', $annee_plan_mobilisation);
    
    $stmt->execute();

    echo json_encode(['status' => 'success', 'message' => 'Manifestation d\'intérêt soumise avec succès !']);
} catch (PDOException $e) {
    error_log("Erreur de base de données: " . $e->getMessage());
    echo json_encode(['status' => 'error', 'message' => 'Erreur lors de la soumission du formulaire']);
}
?>