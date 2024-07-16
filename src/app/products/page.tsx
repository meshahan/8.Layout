import Link from "next/link"



export default function Products() {
    return (
        <div>
         
            <h3>Product list</h3>
            <ol><li><Link href="./products/product">product</Link></li></ol>
            <ol><li><Link href="./products/product">product</Link></li></ol>
            <ol><li><Link href="./products/product">product</Link></li></ol>
            <ol><li><Link href="./products/product">product</Link></li></ol>
            <ol><li><Link href="./products/product">product</Link></li></ol>
        </div>
    )
}