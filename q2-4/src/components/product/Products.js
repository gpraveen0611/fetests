
import {
    Paper, TableBody, TableContainer, TableHead, TableRow, TableCell, Container, Button, Card,
    CardActions, CardContent, Typography, FormGroup, FormControl, TextField
} from "@mui/material";
import { useEffect, useState } from "react";
import data from '../../data/products.json';
import { Modal, Box, MenuItem, InputLabel, Select } from "@mui/material";
import './Product.css';

const Products = (props) => {

    const [products, setProducts] = useState(data);
    const [add, setAdd] = useState();
    const [name, setName] = useState();
    const [quantity, setQuantity] = useState();
    const [price, setPrice] = useState();
    const [type, setType] = useState();
    const [open, setOpen] = useState(false);

    useEffect(() => {
        if(add) {
            const product = {
                product: name,
                type: type,
                quantity: quantity,
                unitPrice: price,
                totalPrice: quantity * price
            }
            setProducts(products => [...products, product]);
            setOpen(false);
            setAdd(false);
            handleReset();
        }
    }, [add]);

    const addProduct = (e) => {
        setOpen(true);
    }

    const deleteProduct = (e) => {
        const name = e.target.value;
        setProducts(products.filter(product => product.product !== name));
    }

    const handleChange = (e) => {
        const field = e.target.name;
        switch (field) {
            case "name": {
                setName(e.target.value);
                break;
            }
            case "quantity": {
                setQuantity(e.target.value);
                break;
            }
            case "price": {
                setPrice(e.target.value);
                break;
            }
            case "type": {
                setType(e.target.value);
                break;
            }
        }
    }

    const style = {
        position: 'absolute',
        outline: 0,
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '1px solid #000',
        boxShadow: 24,
        pt: 2,
        px: 4,
        pb: 3,
    };

    const handleClose = () => {
        setOpen(false);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setAdd(true);
    }

    const handleReset = () => {
        setName("");
        setQuantity("");
        setPrice("");
        setType("");
    }

    return (
        <Container>
            <Card variant="outlined">
                <CardContent>
                    <Typography color="text.secondary">Welcome to food court</Typography>
                </CardContent>
                <CardActions>
                    <Button variant="outlined" onClick={addProduct}>Add Product</Button>
                </CardActions>
            </Card>
            <TableContainer component={Paper}>
                <TableHead>
                    <TableRow>
                        <TableCell align="center">Product</TableCell>
                        <TableCell align="center">Type</TableCell>
                        <TableCell align="center">Quantity</TableCell>
                        <TableCell align="center">Unit Price</TableCell>
                        <TableCell align="center">Total Price</TableCell>
                        <TableCell align="center">Actions</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        products && products.length > 0 ?
                            products.map((p, k) => {
                                return (
                                    <TableRow key={k}>
                                        <TableCell component="th" scope="row">
                                            {p.product}
                                        </TableCell>
                                        <TableCell component="th" scope="row">
                                            {p.type}
                                        </TableCell>
                                        <TableCell>
                                            {p.quantity}
                                        </TableCell>
                                        <TableCell>
                                            {p.unitPrice}
                                        </TableCell>
                                        <TableCell>
                                            {p.totalPrice}
                                        </TableCell>
                                        <TableCell>
                                            <Button variant="outlined" onClick={deleteProduct} value={p.product} color="error">Delete</Button>
                                        </TableCell>
                                    </TableRow>
                                )
                            })
                            : 
                            <TableRow>
                                 <TableCell>
                                    <Typography variant="h5" component="h2" >No Products</Typography>
                                 </TableCell>
                            </TableRow>
                    }
                </TableBody>
            </TableContainer>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box align="center" sx={{ ...style, width: 500 }}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Please fill the details
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        <form onSubmit={handleSubmit}>
                            <FormGroup>
                                <FormControl className="form-control-product">
                                    <TextField value={name} name="name" onChange={handleChange} required
                                        label={"Enter product name"}>
                                    </TextField>
                                </FormControl>
                                <FormControl className="form-control-product">
                                    <InputLabel id="demo-simple-select-label">Select type</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={type}
                                        label="type"
                                        name="type"
                                        onChange={handleChange}
                                        required
                                    >
                                        <MenuItem value={'Food'}>Food</MenuItem>
                                        <MenuItem value={'Drinks'}>Drinks</MenuItem>
                                    </Select>
                                </FormControl>
                                <FormControl className="form-control-product">
                                    <TextField value={quantity} onChange={handleChange} type="number" name="quantity" required
                                        label={"Enter quantity"}>
                                    </TextField>
                                </FormControl>
                                <FormControl className="form-control-product">
                                    <TextField value={price} onChange={handleChange} type="number" name="price" required
                                        label={"Enter unit price"} >
                                    </TextField>
                                </FormControl>
                                <FormControl>
                                    <Button type="submit" variant={"outlined"} color="primary">Save Product</Button>
                                </FormControl>
                            </FormGroup>
                        </form>
                    </Typography>
                </Box>
            </Modal>
        </Container>
    )
}

export default Products;