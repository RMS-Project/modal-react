import React from 'react'
import reactLogo from './assets/react.svg'

import Counter from './components/counter/Counter'
import Modal from './components/modal/Modal'

import './App.css'

interface AppState {
  isModalOpen: boolean
}

class App extends React.Component<{}, AppState>{
  state = {
    isModalOpen: false,
  }

  render() {
    return (
      <div className="App">

        <button onClick={() => this.setState({ isModalOpen: true })}>
          Open Modal
        </button>

        <Modal
          isOpen={this.state.isModalOpen}
          onClose={() => this.setState({ isModalOpen: false })}
        >
          <h1>Modal Title RMS</h1>
          <p>Modal content goes here...</p>
        </Modal>


        <div>
          <a href="https://vitejs.dev" target="_blank">
            <img src="/vite.svg" className="logo" alt="Vite logo" />
          </a>
          <a href="https://reactjs.org" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
        <h1>Vite + React</h1>
        <div className="card">
          <Counter/>
          <p>
            Edit <code>src/App.tsx</code> and save to test HMR
          </p>
        </div>
        <p className="read-the-docs">
          Click on the Vite and React logos to learn more
        </p>
      </div>
    )
  }
}

export default App
