import "@styles/card.css";
import VanillaTilt from 'vanilla-tilt';
import { useEffect, useState, useRef } from 'react'
import Discord from '@icons/discord.svg'
import Github from '@icons/github.svg'
import Mail from '@icons/mail.svg'
import Profile from '@public/pfp.webp'
import QuestBadge from '@icons/discordQuestBadge.png'
import DeveloperBadge from '@icons/discordDeveloperBadge.png'
import AddFriend from '@icons/addFriend.svg'
import AlbumImage from '@public/albumImage.jpg'
import GotItHandled from '@audio/GotItHandled.mp3'
import Play from '@icons/playIcon.svg'
import Pause from '@icons/pauseIcon.svg'

const socialMedia = [
  {
    name: 'Discord',
    url: 'https://discord.com/users/446418348943867904',
    icon: Discord
  },
  {
    name: 'GitHub',
    url: 'https://github.com/JunLovin',
    icon: Github
  },
  {
    name: 'Mail',
    url: 'mailto:mathiassaid7@gmail.com',
    icon: Mail
  }
]

function Card() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(new Audio(GotItHandled));
  audioRef.current.volume = 0.2;

  useEffect(() => {
    VanillaTilt.init(document.querySelector(".js-tilt"), {
      max: 25,
      speed: 400,
      glare: false,
    });

    const audio = audioRef.current;

    // Add event listeners for audio
    audioRef.current.addEventListener('play', () => setIsPlaying(true));
    audioRef.current.addEventListener('pause', () => setIsPlaying(false));

    return () => {
      // Cleanup event listeners
      audio.removeEventListener('play', () => setIsPlaying(true));
      audio.removeEventListener('pause', () => setIsPlaying(false));
    };
  }, []);

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
  };

  const handleAddFriend = () => {
    window.open('https://discord.com/users/446418348943867904', '_blank');
  }

  return (
    <div className="card js-tilt">
      <h1>Hey! I&#39;m Said Ruiz</h1>
      <p className="bio">I am a software engineering student, I am learning completely self-taught. I love learning new things and I&apos;m looking to improve myself every day. If you want to work with me or give me feedback you can contact me through one of my social networks. ♥️</p>
      <div className="card-social-media">
        <ul>
          {socialMedia.map(({ name, url, icon }) => (
            <li key={name}><a href={url} target="_blank"><img src={icon} className="icon" alt={name} /></a></li>
          ))}
        </ul>
      </div>
      <div className="card-discord-profile profile">
        <div className="profile-container">
          <img src={Profile} alt="Discord Profile" className="profile-image"/>
          <div className="discordStatus" title="Available"></div>
        </div>
        <div className="profile-name">
          <h2>junlovin<span className="tag">#3878</span></h2>
          <div className="badge-container">
            <a href="https://support-dev.discord.com/hc/en-us/articles/10113997751447-Active-Developer-Badge" target="_blank"><img src={DeveloperBadge} alt="Developer Badge" className="badge-developer badge"/></a>
            <a href="https://discord.com/ads/quests" target="_blank"><img src={QuestBadge} alt="Quest Badge" className="badge-quest badge"/></a>
          </div>
          <div className="text-status">
            <p>🌺 Have a nice day!</p>
          </div>
        </div>
        <div className="add-friend">
          <button onClick={handleAddFriend}><img src={AddFriend} alt="Add Friend" /></button>
        </div>
      </div>
      <div className="music-player">
        <div className="music-player-container">
          <div className="music-player-image">
            <img src={AlbumImage} alt="Music Player" className="music-player-image"/>
          </div>
          <div className="music-player-info">
            <h2>Got It Handled</h2>
            <p>Xavy Rusan</p>
          </div>
          <div className="music-player-controls">
            <button onClick={togglePlay} className="play-button">
              {isPlaying ? <img src={Pause} alt="Pause" /> : <img src={Play} alt="Play" />}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
