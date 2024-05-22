

function Total() {
    const cartItems = JSON.parse(localStorage.getItem("cart"));
    console.log(cartItems);

    const totalAmount = cartItems.reduce((total, item) => {
        return total + item.quantity * item.price;
    }, 0);

    return (
        <section className="w-1/4 h-40 border bg-purple-500 font-bold flex justify-center text-center items-center">
            <div>
                <h2>Total Amount</h2>
                <p>${totalAmount.toFixed(2)}</p>
            </div>
        </section>
    )
}

export default Total;
