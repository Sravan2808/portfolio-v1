import {catConfig} from '../config/Cat';
import Script from 'next/script';
import React from 'react';

export default function OnekoCat() {
  if (!catConfig.enabled) {
    return null;
  }

  return <Script src="./sprites/oneko-cat.js" data-cat="./sprites/oneko-cat.gif" />;
}