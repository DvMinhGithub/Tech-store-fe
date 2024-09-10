import { Button, Card } from 'antd'
const { Meta } = Card
function ProductCard({ product }) {
  return (
    <Card key={product.id} hoverable cover={<img alt={product.name} src={product.image} />} className="w-full">
      <Meta title={product.name} description={product.price} />
      <Button type="primary" className="mt-4 w-full">
        Thêm vào giỏ hàng
      </Button>
    </Card>
  )
}

export default ProductCard
