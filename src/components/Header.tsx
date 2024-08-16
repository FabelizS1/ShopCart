import './Header.css'

function Header() {


  return (
    <>
    <div className="header">
        <div className="menuLeft">
            <img src={`/img/logo.JPG`} alt="imagen guitarra" width="20%" />
            <div className="barMenu"></div>
            <ul>
                <li>CURRENCY</li>
                <li>ITEMS</li>
                <li>ACCOUNTS</li>
                <li>SERVICES</li>
                <li>SWAP</li>
                <li>SELL</li>
            </ul>
        </div>
        <div>
            <ul>
                <li>USD</li>
                <li>CART (5)</li>
                <li><input type="button" value="SIGN IN" className="buttonSignIn"/></li>
            </ul>
        </div>
        
    </div>

    </>
  )
}

export default Header
