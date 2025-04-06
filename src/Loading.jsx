import animationData from "./LoadingAnimation/Animation - 1743775017572.json"
import Lottie from 'react-lottie'

const Loading = () => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    }

    return (
        <div className='loading_screen'>
            <Lottie
            options={defaultOptions}
            height={400}
            width={400}
            />
        </div>
    )
}

export {Loading}