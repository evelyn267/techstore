const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.static('public')); // Servirá index.html, css y js automáticamente

// Base de datos simulada
const products = [
    { 
        id: 1, 
        name: "Laptop Pro X1", 
        category: "Laptops",
        price: 1200, 
        description: "Potencia desmedida para desarrolladores.",
        image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=500&q=80" 
    },
    { 
        id: 2, 
        name: "Monitor 4K Ultra", 
        category: "Monitores",
        price: 450, 
        description: "Colores reales, refresco de 144hz.",
        image: "https://images.unsplash.com/photo-1675151638325-6891dc1cccf0?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
    },
    { 
        id: 3, 
        name: "Teclado Mecánico RGB", 
        category: "Periféricos",
        price: 150, 
        description: "Switches azules ruidosos.",
        image: "https://images.unsplash.com/photo-1595225476474-87563907a212?q=80&w=4000&auto=format&fit=crop" // BUG: Imagen de 5MB (Performance)
    },
    { 
        id: 4, 
        name: "Mouse Wireless", 
        category: "Periféricos",
        price: 60, 
        description: "Ergonomía total.",
        image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=500&q=80"
    }
];

// API: Listar productos
// El developer no sabia lo que hacia y puso ese timeout
app.get('/api/products', (req, res) => {
    setTimeout(() => {
        res.json(products);
    }, 800);
});

// API: El developr hizo algo raro aqui, siempre deberia ser success
app.post('/api/checkout', (req, res) => {
    setTimeout(() => {
        res.json({ success: true, orderId: "ORD-" + Math.floor(Math.random() * 10000) });
    }, 1500);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor corriendo en puerto ${PORT}`));