export function generateRandomNameAndMessage() {
  // Array of possible names
  const names = [
    "Chetan Malpure",
    "Alice Johnson",
    "Bob Smith",
    "Emma Davis",
    "John Doe",
    "Jane Doe",
    "Michael Brown",
    "Emily Wilson",
    "David Clark",
    "Sophia Adams",
    "Daniel Lee",
    "Isabella Taylor",
    "James Anderson",
    "Olivia Thomas",
    "William Martinez",
    "Ava Garcia",
    "Benjamin Hernandez",
    "Mia Robinson",
    "Jacob Walker",
    "Charlotte Lewis",
    "Ethan Hall",
    "Amelia Young",
    // Add more names as needed
  ];

  // Array of possible messages
  const messages = [
    "Hello World!",
    "Goodbye World!",
    "How are you?",
    "Have a great day!",
    "Stay positive!",
    "Keep smiling!",
    "Have a wonderful day!",
    "See you soon!",
    "Take care!",
    "You are amazing!",
    "Keep up the good work!",
    "Wishing you all the best!",
    "Hope you're doing well!",
    "You're doing great!",
    "Just wanted to say hi!",
    "Sending positive vibes your way!",
    // Add more messages as needed
  ];

  // Function to get a random item from an array
  const getRandomItem = (array) => {
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
  };

  // Generate random name and message
  const name = getRandomItem(names);
  const message = getRandomItem(messages);

  return { name, message };
}
