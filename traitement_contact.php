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
$nom = $_POST['nom'];
$email = $_POST['email'];
$sujet = $_POST['sujet'];
$message = $_POST['message'];

// Insertion des données dans la base de données
try {
    $stmt = $conn->prepare("INSERT INTO contacts (nom, email, sujet, message) VALUES (:nom, :email, :sujet, :message)");
    $stmt->bindParam(':nom', $nom);
    $stmt->bindParam(':email', $email);
    $stmt->bindParam(':sujet', $sujet);
    $stmt->bindParam(':message', $message);
    $stmt->execute();

    echo json_encode(['status' => 'success', 'message' => 'Message envoyé avec succès !']);
} catch (PDOException $e) {
    echo json_encode(['status' => 'error', 'message' => 'Erreur lors de l\'envoi du message']);
}
?>