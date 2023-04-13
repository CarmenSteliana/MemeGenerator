import Image from './images/logo/meme-image.png'
import styles from './Meme.module.css'
import memeData from './memeData'
import { useState } from 'react'
import { useEffect } from 'react'

interface MemeApi {
    id: string
    name: string
    url: string
    width: number
}

export default function Meme() {
    const [meme, setMeme] = useState({
        topText: "",
        bottomText: "",
        randomImage: "",
    })

    const [allMemes, setAllMemes] = useState<MemeApi[]>([])

    useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(data => setAllMemes(data.data.memes))
    }, [])

    function getMemeImage() {

        const randomNumber = Math.floor(Math.random() * allMemes.length)
        const image = allMemes[randomNumber].url;
        console.log(image)

        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: image,
        }))

    }


    function handleChange(event: any) {
        const { name, value } = event.target;
        setMeme(prevMeme => ({
            ...prevMeme,
            [name]: value,
        }))

    }
    return (
        <main className={styles.main}>
            <input
                type="text"
                placeholder="Top text"
                className={`${styles['form-input']} ${styles['top-text']}`}
                name="topText"
                value={meme.topText}
                onChange={handleChange}

            />
            <input
                type="text"
                placeholder="Buttom text"
                className={`${styles['form-input']} ${styles['bottom-text']}`}
                name="bottomText"
                value={meme.bottomText}
                onChange={handleChange}
            />

            <button className={styles.button}
                onClick={getMemeImage}>
                Get a new meme image
            </button>



            <div className={styles.meme}>
                <div className={styles.inputTopText}>{meme.topText}</div>
                <div className={styles.inputBottomText}>{meme.bottomText}</div>
                <img src={meme.randomImage} alt="" />
            </div>

        </main>
    )
}