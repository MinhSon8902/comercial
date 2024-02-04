import banner1 from 'src/assets/images/banner1.png'
import banner2 from 'src/assets/images/banner2.png'
import banner3 from 'src/assets/images/banner3.png'
import banner4 from 'src/assets/images/banner4.png'
let offer = [
  {
    id: 1,
    imgUrl: banner1,
  },
  {
    id: 2,
    imgUrl: banner2,
  },
  {
    id: 3,
    imgUrl: banner3,
  },
  {
    id: 4,
    imgUrl: banner4,
  },
]

function ListPages() {
  return (
    <div className="offer-list">
      {offer.map((offer) => (
        <div className="offer-item" key={offer.id}>
          <img src={offer.imgUrl} alt="" />
        </div>
      ))}
    </div>
  )
}

ListPages.propTypes = {}

export default ListPages
