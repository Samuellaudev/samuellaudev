'use client';

import Spotlight from './Spotlight';
import BarLoader from './BarLoader';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useMemo } from 'react';

export default function SharedTabsLayout({ tabs }) {
  const [selectedTab, setSelectedTab] = useState(tabs[0]);

  const tabsList = useMemo(
    () =>
      tabs.map((item) => (
        <motion.li
          key={item.label}
          initial={false}
          className="relative font-medium w-full px-4 flex justify-around items-center cursor-pointer"
          onClick={() => setSelectedTab(item)}
        >
          {`${item.label}`}
          {item === selectedTab ? (
            <motion.div
              className="absolute h-[2px] left-0 right-0 -bottom-2 bg-primary-500"
              layoutId="underline"
              id="underline"
            />
          ) : null}
        </motion.li>
      )),
    [tabs, selectedTab],
  );

  return (
    <Spotlight className="min-w-[250px] md:w-[450px] h-[60vh] max-h-[360px] rounded-lg bg-gray-900 overflow-hidden flex flex-col mx-auto my-8 border-2 border-gray-800">
      {/* Tab bar */}
      <nav className="bg-gray-900 py-4">
        <ul className="flex w-full">{tabsList}</ul>
      </nav>

      {/* Main content */}
      <main className="flex flex-1 bg-gray-900 overflow-auto">
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedTab ? selectedTab.label : 'empty'}
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className={`text-gray-200 p-4 ${
              selectedTab ? 'ml-4' : 'mx-auto my-auto'
            }`}
          >
            {selectedTab ? selectedTab.content : <BarLoader />}
          </motion.div>
        </AnimatePresence>
      </main>
    </Spotlight>
  );
}
