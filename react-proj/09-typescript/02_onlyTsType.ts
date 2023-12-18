// or
type gender = 'Man' | 'Woman'
const seyun: gender = 'Man';

// 튜플에 타입을 지정 [상품명, 가격]
type productInfo = [string, number]
const cola: productInfo = ["cola", 2500]

// 객체에 타입을 지정할 경우
interface ProductInfo2 {
  productName: string,
  price: number
}

const cider: ProductInfo2 = {
  productName: "cider",
  price: 2000,
}

type ProductInfo3 = {
  productName: string,
  price: number,
  // 옵셔널한 값
  sale?: number
}

const beer: ProductInfo3 = {productName:"beer", price: 2000}
const wine: ProductInfo3 = {productName:"beer", price: 2000, sale: 10}

// console.log('beer.sale', beer.sale)

interface Seller {
  name: string;
}

interface ProductInfo4 {
  productName: string;
  price: number;
  sale?: object;
  seller?: Seller;
}

const soju: ProductInfo4 = {
  productName: "soju",
  price: 2000,
  // seller: {name: "master"}
}

// 옵셔널 체이닝
// 인터페이스에서 seller는 optional key로 설정해서 undefined가 될 수 있음
// console.log('soju.seller?.name',soju.seller.name)
// 값이 없으면 접근하지 않음. undefined 
console.log('soju.seller?.name: ', soju.seller?.name)

interface Person {
  name: string
  age: number
}

interface Student extends Person {
  studentId: string
  eat: (food: string) => void
}

const person1: Person = {
  name: "tester",
  age: 21,
}

const student1: Student = {
  studentId: "01",
  name: "tester",
  age: 15,
  eat: (rice = "rice") => console.log(`${rice} 먹자`)
}

interface Game {
  title: string
  price: number
  category: string
  desc?: string
  platform: string
}