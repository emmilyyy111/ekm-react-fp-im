import { Image } from "react-bootstrap"
import { useContext } from "react"
import { UserProfile } from "../App"


const Home = () => {
  const {token} = useContext(UserProfile)
  console.log(token)
  return (
      <>
      {!token &&
      <div className="neon">
        <h2 className="neontext">Sign up to search your perfect outfit✨</h2>
        </div>
      }
    <div className="home home-container">
            <div className="home img65">
            <Image src="../assets/pic65.png" style={{ width: '150px', height: 'auto'}} roundedCircle />
            </div>

            <div className="home img43">
            <Image src="../assets/pic44.png" style={{ width: '150px', height: 'auto'}} roundedCircle />
            </div>
            
            <div className="home img29">
            <Image src="../assets/pic29.png" style={{ width: '150px', height: 'auto'}} roundedCircle />
            </div>

            <div className="home img34">
            <Image src="../assets/pic35.png" style={{ width: '150px', height: 'auto'}} roundedCircle />
            </div>
            
            <div className="home img11">
            <Image src="../assets/pic17.png" style={{ width: '150px', height: 'auto'}} roundedCircle />
            </div>
    </div>
    </>
  )
}
export default Home
