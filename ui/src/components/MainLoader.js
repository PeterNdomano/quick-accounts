import React, { useState } from 'react';
import $ from 'jquery';
import {  getInlineLoader } from '../Helper';

export default function Main() {


  return (
    <div className="MainLoader">
      {getInlineLoader()}
    </div>
  )
}
