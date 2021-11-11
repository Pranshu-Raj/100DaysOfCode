import React from 'react' ; 

class CartItem extends React.Component {
    render () {
        return (<div className="cart-items">
        <div className="left-block">
        <img style ={styles.Image} ></img>
        </div>
        <div className="right-block">
            <div style={{ fontsize:25 }}>Phone</div>
            <div style={{ color: '#777' }}>Rs 999</div>
            <div style={{ color: '#777' }}>Qty: 1</div>
        <div className="cart-item-actions">
            {/*Buttons */}
        </div>
        </div>
    </div>)
        
    }
}

const styles = {
    Image: {
        height: 100,
        width: 110,
        borderRadius: 4
    }
}
export default CartItem;