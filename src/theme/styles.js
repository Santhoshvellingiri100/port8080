const FontFamily01 = "Anton, sans-serif";
// const FontFamily02 = "Poppins, sans-serif";
const FontFamily02 = "Montserrat, sans-serif";
const FontHeroFamily = "Bungee Outline, sans-serif";

const FONTS = {
    hero01: {
        fontSize: 'clamp(1.4rem, 4vw, 1.8rem)', // Reduced min size by 0.1rem
        fontWeight: '500',
        fontFamily: FontHeroFamily,
        lineHeight: 'clamp(1.4rem, 5vw, 2.8rem)', // Reduced min size by 0.1rem
        color: 'white'
    },
    title01: {
        fontSize: 'clamp(2.9rem, 6vw, 6rem)', // Reduced min size by 0.1rem
        fontWeight: '700',
        fontFamily: FontFamily01,
        textTransform: "uppercase",
        letterSpacing: '.2rem',
        lineHeight: 'clamp(2.9rem, 8vw, 6rem)', // Reduced min size by 0.1rem
        color: 'white'
    },
    title02: {
        fontSize: 'clamp(1.7rem, 4vw, 3.2rem)', // Reduced min size by 0.1rem
        fontWeight: '700',
        fontFamily: FontFamily01,
        textTransform: "uppercase",
        lineHeight: 'clamp(1.7rem, 5vw, 3.4rem)', // Reduced min size by 0.1rem
        color: 'white'
    },
    heading01: {
        fontSize: 'clamp(1.1rem, 2.5vw, 1.8rem)', // Reduced min size by 0.1rem
        fontWeight: '500',
        fontFamily: FontFamily01,
        textTransform: "uppercase",
        lineHeight: 'clamp(1.1rem, 3vw, 2.8rem)', // Reduced min size by 0.1rem
        color: 'white'
    },
    heading02: {
        fontSize: 'clamp(0.9rem, 2vw, 1.8rem)', // Reduced min size by 0.1rem
        fontWeight: '500',
        fontFamily: FontFamily01,
        textTransform: "uppercase",
        lineHeight: 'clamp(0.9rem, 2.5vw, 2.4rem)', // Reduced min size by 0.1rem
        color: 'white'
    },
    subhead01: {
        fontSize: 'clamp(0.8rem, 1.8vw, 1.2rem)', // Reduced min size by 0.1rem
        fontWeight: '200',
        letterSpacing: '.05rem',
        fontFamily: FontFamily01,
        textTransform: "uppercase",
        lineHeight: 'clamp(0.8rem, 2.5vw, 2.2rem)', // Reduced min size by 0.1rem
        color: 'white'
    },
    subhead02: {
        fontSize: 'clamp(0.7rem, 1.6vw, 1rem)', // Reduced min size by 0.1rem
        fontWeight: '100',
        letterSpacing: '.05rem',
        fontFamily: FontFamily01,
        textTransform: "uppercase",
        lineHeight: 'clamp(0.7rem, 2vw, 1.9rem)', // Reduced min size by 0.1rem
        color: 'white'
    },
    label01: {
        fontSize: 'clamp(.9rem, 1.5vw, 1rem)', // Reduced min size by 0.1rem
        fontWeight: '600',
        fontFamily: FontFamily02,
        lineHeight: 'clamp(1.8rem, 2vw, 3rem)', // Reduced min size by 0.1rem
        color: 'white'
    },
    label02: {
        fontSize: 'clamp(0.8rem, 1.3vw, 0.9rem)', // Reduced min size by 0.1rem
        fontWeight: '400',
        fontFamily: FontFamily02,
        lineHeight: 'clamp(1.4rem, 1.7vw, 0.9rem)', // Reduced min size by 0.1rem
        color: 'white'
    },
    smallText01: {
        fontSize: 'clamp(0.7rem, 1.2vw, 0.8rem)', // Reduced min size by 0.1rem
        fontFamily: FontFamily02,
        lineHeight: 'clamp(.5rem, 2vw, 1.5rem)', // Reduced min size by 0.1rem
        color: 'white'
    },
    smallText02: {
        fontSize: 'clamp(0.4rem, 1vw, 0.7rem)', // Reduced min size by 0.1rem
        fontFamily: FontFamily02,
        lineHeight: 'clamp(0.4rem, 1.2vw, 1.3rem)', // Reduced min size by 0.1rem
        color: 'white'
    },

}

export default FONTS