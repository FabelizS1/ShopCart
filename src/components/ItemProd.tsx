import './ItemProd.css'
import type { Items } from "../types";


type ItemsProps = {
    currentItems: Items[],
    addToCart: (val: number) => void
}


function ItemProd( { currentItems, addToCart } : ItemsProps) {

  return (
    <>
        {currentItems &&
        currentItems.map(item => (
          <>
            <div key={item.id} className='itemInfo'>
                <div className='itemsDisplayTwoBetween'>
                  <div className='flexColumn'>
                    <div>
                      <ul>
                        <li><p className='textWhite'>ON SALE</p></li>
                      </ul>
                    </div>
                    <div><input type="button" value="In stock" className='buttonInStock'/></div>
                  </div>
                  <div className='rightItem'><input type="number" className='inputLittle'/></div>
                </div>
                <div className='imgDiv'><img className="img-fluid" src={`/img/${item.image}.jpg`} alt="video game"  width="30%" height="100%" /></div>
                <div className='itemsDisplayTwoBetween'>
                  <div className='textLight'>{item.name}</div>
                  <div className=''><input type="button" value="A" className='buttonPower'/></div>
                </div>
                <div className='textBold2'>${item.price}</div>
                <div className='itemsDisplayTwoBetween'>
                  <div className='textGray'>DETAILS</div>
                  <div className=''><input type="button" value="ADD" className='buttonSignAdd' onClick={()=> addToCart(1)}/></div>
                </div>
            </div>
          </>

        ))}
    </>
  )
}

export default ItemProd
