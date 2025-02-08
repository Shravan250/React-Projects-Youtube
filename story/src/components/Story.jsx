import React, { useState } from "react";
import "./Story.css";

const Story = () => {
  const [story, setStory] = useState({
    scenes: [],
    currentScene: 0,
    characters: [],
    playerChoices: [],
  });

  const initialScenes = [
    {
      id: 0,
      text: "You wake up in a mysterious forest. Do you explore the forest or try to find a way out?",
      choices: [
        { text: "Explore the forest", nextScene: 1 },
        { text: "Find a way out", nextScene: 2 },
      ],
    },
    {
      id: 1,
      text: "You find a hidden path. Do you follow it or go back?",
      choices: [
        { text: "Follow the path", nextScene: 3 },
        { text: "Go back", nextScene: 0 },
      ],
    },
    {
      id: 2,
      text: "You stumble upon a river. Do you swim across or look for a bridge?",
      choices: [
        { text: "Swim across", nextScene: 4 },
        { text: "Look for a bridge", nextScene: 5 },
      ],
    },
    {
      id: 3,
      text: "You discover a treasure chest! You win!",
      choices: [],
    },
    {
      id: 4,
      text: "You get swept away by the current and lose consciousness. Game over.",
      choices: [],
    },
    {
      id: 5,
      text: "You find a bridge and safely cross the river. You win!",
      choices: [],
    },
  ];

  if (story.scenes.length === 0) {
    setStory((prevState) => ({
      ...prevState,
      scenes: initialScenes,
    }));
  }

  const handleChoice = (nextScene) => {
    setStory((prevState) => ({
      ...prevState,
      currentScene: nextScene,
      playerChoices: [...prevState.playerChoices, nextScene],
    }));
  };

  const currentSceneData = story.scenes[story.currentScene];

  return (
    <div className="story-container">
      <h1 className="story-title">Interactive Story</h1>
      <div className="scene-card">
        <p className="scene-text">{currentSceneData?.text}</p>
        <div className="choices-container">
          {currentSceneData?.choices.map((choice, index) => (
            <button
              key={index}
              className="choice-button"
              onClick={() => handleChoice(choice.nextScene)}
            >
              {choice.text}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Story;
