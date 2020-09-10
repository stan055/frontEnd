
;(function() {

    let nav = document.getElementsByTagName('nav')

    // Add html menu
    nav[0].innerHTML = `
        <ul id="menu">
            <li><a class="menu-btn" href="index.html">Home</a></li>
            <li><a class="menu-btn" href="about.html">About</a></li>
            <li><a class="menu-btn" href="contact.html">Contact</a></li>
            <li><a class="menu-btn" href="register.html">Register</a></li>
            <li><a class="menu-btn" href="order.html">Order</a></li>
        </ul>
    `
    const menuBtn = document.getElementsByClassName('menu-btn')
    
    try {
        const page = parseInt(nav[0].attributes.page.value)
        if (!isNaN(page))
            menuBtn[page].className = 'active'
    } catch (e) {
        console.log("error of page value")
    }

})()





