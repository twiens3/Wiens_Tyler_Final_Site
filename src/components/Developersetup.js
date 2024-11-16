// src/components/DeveloperSetup.js
import React from 'react';

const DeveloperSetup = () => {
  return (
    <section id="developer-setup">
      <h2>Developer Setup</h2>
      <div className="setup">
        <h3>VSCode Setup</h3>
        <p>Here’s my setup for VSCode: Dark Mode, Prettier, ESLint, and some custom keybindings.</p>

        <h3>Terminal Setup</h3>
        <p>I use Zsh with Oh My Zsh for my terminal setup. I also use custom themes like agnoster.</p>

        <h3>Preferred Editor Font</h3>
        <p>My preferred font is "Fira Code" with Ligatures enabled for better readability.</p>
      </div>
    </section>
  );
};

export default DeveloperSetup;