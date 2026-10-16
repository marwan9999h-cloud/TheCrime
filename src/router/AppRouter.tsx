/**
 * CRIME - Social Deduction Mystery Game
 * Screen Router Dispatcher
 */

import React from 'react';
import { useGame } from '../context/GameContext';
import { HomeScreen } from '../components/screens/HomeScreen';
import { HowToPlayScreen } from '../components/screens/HowToPlayScreen';
import { CaseSelectionScreen } from '../components/screens/CaseSelectionScreen';
import { CaseArchiveScreen } from '../components/screens/CaseArchiveScreen';
import { CrimeInfoScreen } from '../components/screens/CrimeInfoScreen';
import { CaseBriefingScreen } from '../components/screens/CaseBriefingScreen';
import { SettingsScreen } from '../components/screens/SettingsScreen';
import { PlayerSetupScreen } from '../components/screens/PlayerSetupScreen';
import { PassDeviceScreen } from '../components/screens/PassDeviceScreen';
import { SecretBriefingScreen } from '../components/screens/SecretBriefingScreen';
import { RoundIntroScreen } from '../components/screens/RoundIntroScreen';
import { EvidenceBoardScreen } from '../components/screens/EvidenceBoardScreen';
import { VotingScreen } from '../components/screens/VotingScreen';
import { VoteResultsScreen } from '../components/screens/VoteResultsScreen';
import { JailStatementScreen } from '../components/screens/JailStatementScreen';
import { EndingRevealScreen } from '../components/screens/EndingRevealScreen';
import { AnimatePresence, motion } from 'motion/react';

export const AppRouter: React.FC = () => {
  const { state } = useGame();

  const renderScreen = () => {
    switch (state.currentScreen) {
      case 'home':
        return <HomeScreen key="home" />;
      case 'settings':
        return <SettingsScreen key="settings" />;
      case 'how_to_play':
        return <HowToPlayScreen key="how_to_play" />;
      case 'case_selection':
        return <CaseSelectionScreen key="case_selection" />;
      case 'case_archive':
        return <CaseArchiveScreen key="case_archive" />;
      case 'crime_info':
        return <CrimeInfoScreen key="crime_info" />;
      case 'case_briefing':
        return <CaseBriefingScreen key="case_briefing" />;
      case 'player_setup':
        return <PlayerSetupScreen key="player_setup" />;
      case 'pass_device':
        return <PassDeviceScreen key="pass_device" />;
      case 'secret_briefing':
        return <SecretBriefingScreen key="secret_briefing" />;
      case 'round_intro':
        return <RoundIntroScreen key="round_intro" />;
      case 'evidence_board':
        return <EvidenceBoardScreen key="evidence_board" />;
      case 'voting':
        return <VotingScreen key="voting" />;
      case 'vote_results':
        return <VoteResultsScreen key="vote_results" />;
      case 'jail_statement':
        return <JailStatementScreen key="jail_statement" />;
      case 'ending_reveal':
        return <EndingRevealScreen key="ending_reveal" />;
      default:
        return <HomeScreen key="home_fallback" />;
    }
  };

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={state.currentScreen}
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -8 }}
        transition={{ duration: 0.25 }}
        className="flex-1 flex flex-col w-full"
      >
        {renderScreen()}
      </motion.div>
    </AnimatePresence>
  );
};
