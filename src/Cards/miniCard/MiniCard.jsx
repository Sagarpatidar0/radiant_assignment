import './MiniCard.scss'
function MiniCard
() {
  return (
    <div className='box'>
    <img src='./Image/bg.png' />

    <div className='tags'>
        <h3>20% off</h3>
        <h4>Limited time</h4>
    </div>
    <div className='heading'>
      <h4>Webbuilder 1</h4>
    <p>Computer Modern clasic with wix support</p>
</div>
<div className='Pricetag'>
    <h2 className='offer'>$39.96</h2>
    <h4 className='price'>$49.96</h4>
    <h5 className='off'>20% Off</h5>
</div>

<button className='Deal'>View Deal</button>
    </div>
  )
}

export default MiniCard
