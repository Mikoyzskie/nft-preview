import './App.scss'

function App() {
  const tilt = [1,2,3,4,5,6,7,8,9];
  return (
    <main className='preview__wrapper'>
      {
        tilt.map((items)=>(
          <span key={items} className="t_over"></span>
        ))
      }
      <div className="preview__container">
        <img className='preview__image' src="./image-equilibrium.jpg" alt="equilibrium" />
        <h2>Equilibrium #3429</h2>
        <p className='preview__description'>
        Our Equilibrium collection promotes balance and calm.
        </p>
        <div className='nft'>
          <div className="nft-price">
            <img src="./icon-ethereum.svg" alt="Ethereum icon " />
            <p className='ethereum'>0.041 ETH</p>
          </div>
          <div className="nft-countdown">
            <img src="./icon-clock.svg" alt="Ethereum icon " />
            <p>3 days left</p>
          </div>
        </div>
        <hr />
        <div className="preview__creator">
          <img src="./image-avatar.png" alt="Jules Wyvern" className="creator__avatar" />
          <p className="creator__name">Creation of <span className='creator'>Jules Wyvern</span></p>
        </div>
      </div>
    </main>
  )
}

export default App
