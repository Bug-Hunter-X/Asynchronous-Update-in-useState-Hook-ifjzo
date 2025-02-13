# Asynchronous Update in useState Hook

This example demonstrates a common issue in React applications where developers inadvertently rely on the updated state immediately after calling `useState`'s setter function. Because state updates are asynchronous in React, the value logged to the console might not reflect the latest state.

## Bug Description
The `handleClick` function updates the `count` state.  Immediately after updating the state, the code logs the current value of `count`. However, due to the asynchronous nature of state updates, the logged value will always be one step behind. 

## Solution
To address this issue, access the updated state in the next render cycle using either `useEffect` or by performing the operation that depends on the updated state within the functional component itself, which leverages React's re-rendering behavior.