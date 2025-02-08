const storyData = {
  scenes: [
    {
      id: 0,
      text: "You arrive at the Dense Amazonian Jungle, where the map marks the entrance to Eldoria. Ahead, two paths diverge.",
      choices: [
        { text: "Take the Overgrown Trail", nextScene: 1 },
        { text: "Follow the River by Canoe", nextScene: 2 },
      ],
    },
    {
      id: 1,
      text: "You push through thick vines, spotting an old stone archway covered in glyphs. Suddenly, you hear a rustling in the bushes.",
      choices: [
        { text: "Investigate the noise", nextScene: 3 },
        { text: "Ignore it and continue forward", nextScene: 4 },
      ],
    },
    {
      id: 2,
      text: "You paddle downstream, and mist rises around you. In the distance, you hear drums echoing through the jungle.",
      choices: [
        { text: "Dock near an ancient temple ruin", nextScene: 5 },
        { text: "Continue downriver", nextScene: 6 },
      ],
    },
    {
      id: 3,
      text: "A hooded figure emerges—a guardian of Eldoria! He warns you of hidden traps.",
      choices: [
        { text: "Offer a gift to gain his trust", nextScene: 7 },
        { text: "Flee before he attacks", nextScene: 8 },
      ],
    },
    {
      id: 4,
      text: "You find an enormous stone gate sealed shut with symbols glowing faintly.",
      choices: [
        { text: "Solve the ancient puzzle", nextScene: 9 },
        { text: "Try to force the gate open", nextScene: 10 },
      ],
    },
    {
      id: 5,
      text: "As you dock near the temple, you notice carvings on the walls depicting ancient rituals.",
      choices: [
        { text: "Explore the temple interior", nextScene: 11 },
        { text: "Set up camp outside the temple", nextScene: 12 },
      ],
    },
    {
      id: 6,
      text: "Continuing downriver, you encounter a tribe performing a ceremonial dance.",
      choices: [
        { text: "Join the ceremony", nextScene: 13 },
        { text: "Observe from a distance", nextScene: 14 },
      ],
    },
    {
      id: 7,
      text: "The guardian accepts your gift and reveals a hidden path leading deeper into the jungle.",
      choices: [
        { text: "Take the hidden path", nextScene: 15 },
        { text: "Return to the main trail", nextScene: 16 },
      ],
    },
    {
      id: 8,
      text: "You flee through the jungle, but stumble upon a hidden village.",
      choices: [
        { text: "Seek help from the villagers", nextScene: 17 },
        { text: "Hide in the nearby cave", nextScene: 18 },
      ],
    },
    {
      id: 9,
      text: "Using your knowledge of ancient symbols, you solve the puzzle and the gate slowly opens.",
      choices: [
        { text: "Enter the mysterious chamber", nextScene: 19 },
        { text: "Wait and observe", nextScene: 20 },
      ],
    },
    {
      id: 10,
      text: "You try to force the gate open, but a trap is triggered, releasing a cloud of sleeping gas.",
      choices: [
        { text: "Cover your mouth and nose", nextScene: 21 },
        { text: "Run back to safety", nextScene: 22 },
      ],
    },
    {
      id: 11,
      text: "Inside the temple, you discover ancient artifacts and inscriptions about a lost civilization.",
      choices: [
        { text: "Study the artifacts", nextScene: 23 },
        { text: "Search for hidden passages", nextScene: 24 },
      ],
    },
    {
      id: 12,
      text: "Setting up camp, you prepare for the night, but strange sounds fill the air.",
      choices: [
        { text: "Investigate the sounds", nextScene: 25 },
        { text: "Stay alert by the campfire", nextScene: 26 },
      ],
    },
    {
      id: 13,
      text: "The tribe welcomes you and shares their wisdom about Eldoria.",
      choices: [
        { text: "Accept their guidance", nextScene: 27 },
        { text: "Continue your journey alone", nextScene: 28 },
      ],
    },
    {
      id: 14,
      text: "Observing from a distance, you learn about the tribe's traditions and their connection to Eldoria.",
      choices: [
        { text: "Approach the tribe", nextScene: 29 },
        { text: "Move on quietly", nextScene: 30 },
      ],
    },
    {
      id: 15,
      text: "Following the hidden path, you come upon a hidden valley filled with exotic plants and animals.",
      choices: [
        { text: "Explore the valley", nextScene: 31 },
        { text: "Set up camp and rest", nextScene: 32 },
      ],
    },
    {
      id: 16,
      text: "Returning to the main trail, you find a clearing with an ancient tree bearing strange fruits.",
      choices: [
        { text: "Examine the tree and fruits", nextScene: 33 },
        { text: "Continue along the trail", nextScene: 34 },
      ],
    },
    {
      id: 17,
      text: "The villagers welcome you and offer their assistance in navigating the jungle.",
      choices: [
        { text: "Accept their help", nextScene: 35 },
        { text: "Thank them and proceed on your own", nextScene: 36 },
      ],
    },
    {
      id: 18,
      text: "Hiding in the cave, you discover ancient markings and a hidden tunnel.",
      choices: [
        { text: "Explore the tunnel", nextScene: 37 },
        { text: "Wait until it's safe to leave", nextScene: 38 },
      ],
    },
    {
      id: 19,
      text: "Entering the chamber, you find an ancient relic glowing with a mysterious light.",
      choices: [
        { text: "Investigate the relic", nextScene: 39 },
        { text: "Leave the chamber", nextScene: 40 },
      ],
    },
    {
      id: 20,
      text: "Waiting patiently, you notice a hidden switch in the wall.",
      choices: [
        { text: "Press the switch", nextScene: 41 },
        { text: "Ignore it and proceed cautiously", nextScene: 42 },
      ],
    },
    {
      id: 21,
      text: "You cover your mouth and nose, managing to escape the gas. You see another pathway leading to safety.",
      choices: [
        { text: "Take the pathway", nextScene: 43 },
        { text: "Return to the entrance", nextScene: 44 },
      ],
    },
    {
      id: 22,
      text: "Running back to safety, you realize you need a new approach to enter Eldoria.",
      choices: [
        { text: "Seek help from the locals", nextScene: 45 },
        { text: "Plan a new route on your map", nextScene: 46 },
      ],
    },
    {
      id: 23,
      text: "As you study the artifacts, you uncover the history of Eldoria and its hidden treasures.",
      choices: [
        { text: "Continue studying", nextScene: 47 },
        { text: "Search for more clues", nextScene: 48 },
      ],
    },
    {
      id: 24,
      text: "You find a hidden passage that leads to the heart of Eldoria.",
      choices: [
        { text: "Enter the passage", nextScene: 49 },
        { text: "Map the passage for later", nextScene: 50 },
      ],
    },
    {
      id: 25,
      text: "Investigating the sounds, you discover a hidden waterfall and a concealed entrance behind it.",
      choices: [
        { text: "Enter the concealed entrance", nextScene: 51 },
        { text: "Return to camp", nextScene: 52 },
      ],
    },
    {
      id: 26,
      text: "You stay alert by the campfire, spotting a faint light in the distance.",
      choices: [
        { text: "Investigate the light", nextScene: 53 },
        { text: "Wait until morning", nextScene: 54 },
      ],
    },
    {
      id: 27,
      text: "With the tribe's guidance, you uncover the entrance to Eldoria's hidden sanctuary.",
      choices: [
        { text: "Enter the sanctuary", nextScene: 55 },
        { text: "Thank the tribe and proceed alone", nextScene: 56 },
      ],
    },
    {
      id: 28,
      text: "Continuing alone, you find an ancient bridge leading to the heart of Eldoria.",
      choices: [
        { text: "Cross the bridge", nextScene: 57 },
        { text: "Find another route", nextScene: 58 },
      ],
    },
    {
      id: 29,
      text: "You cross the bridge cautiously, feeling it sway beneath you. At the end, you see the entrance to a grand temple.",
      choices: [
        { text: "Enter the temple", nextScene: 59 },
        { text: "Explore the surroundings first", nextScene: 60 },
      ],
    },
    {
      id: 30,
      text: "You find a hidden path that circles around the bridge. It leads you to a secret entrance into the temple.",
      choices: [
        { text: "Enter the secret entrance", nextScene: 61 },
        { text: "Continue to explore", nextScene: 62 },
      ],
    },
    {
      id: 31,
      text: "Inside the temple, you discover the legendary treasures of Eldoria. But a final challenge awaits.",
      choices: [
        { text: "Solve the final challenge", nextScene: 63 },
        { text: "Secure the treasures and leave quickly", nextScene: 64 },
      ],
    },
    {
      id: 32,
      text: "You solve the final challenge using your wits, unlocking the ultimate secrets of Eldoria.",
      choices: [
        { text: "Revel in your victory", nextScene: 65 },
        { text: "Document your findings", nextScene: 66 },
      ],
    },
    {
      id: 33,
      text: "As you secure the treasures, the temple begins to collapse. You need to escape quickly.",
      choices: [
        { text: "Run to the nearest exit", nextScene: 67 },
        { text: "Find an alternate escape route", nextScene: 68 },
      ],
    },
    {
      id: 34,
      text: "You narrowly escape the collapsing temple, holding the treasures of Eldoria in your hands.",
      choices: [
        { text: "Reflect on your adventure", nextScene: 69 },
        { text: "Plan your return to civilization", nextScene: 70 },
      ],
    },
    {
      id: 35,
      text: "You return to civilization as a hero, your discoveries sparking interest and excitement worldwide.",
      choices: [
        { text: "Share your story", nextScene: 71 },
        { text: "Keep the secrets to yourself", nextScene: 72 },
      ],
    },
    {
      id: 36,
      text: "Your journey ends, but the mysteries of Eldoria and its treasures continue to captivate the world.",
      choices: [
        { text: "Plan another adventure", nextScene: 0 },
        { text: "Reflect on your accomplishments", nextScene: 73 },
      ],
    },
    {
      id: 37,
      text: "Reflecting on your adventure, you realize it was a journey of a lifetime, full of challenges and triumphs.",
      choices: [
        { text: "Plan your next adventure", nextScene: 0 },
        { text: "Enjoy the peace and satisfaction", nextScene: 74 },
      ],
    },
    // Additional concluding scenes can be added here as needed...
  ],
};

export default storyData;
