<?php
header('Content-Type: application/json');

// Get the input message
$data = json_decode(file_get_contents('php://input'), true);
$message = strtolower(trim($data['message']));

// Simple response logic
$replies = [
    "hi" => "Hello! How can I assist you?",
    "how are you" => "I'm just a bot, but I'm doing great! What about you?",
    "bye" => "Goodbye! Have a great day!"
];

$reply = "Sorry, I didn't understand that.";
if (array_key_exists($message, $replies)) {
    $reply = $replies[$message];
}

echo json_encode(["reply" => $reply]);
?>