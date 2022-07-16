import React, { useState, useEffect } from 'react';
import OneFormItem from '../ones/OneFormItem';

export default function Component(props) {
  return (
    <div className="ItemsForm card" id="itemsForm">
      <div className="card-body">
        <OneFormItem/>
      </div>
    </div>
  )
}
