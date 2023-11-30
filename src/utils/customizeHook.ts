import { useState, useEffect } from 'react';


export const useHasMounted = () => {
    //hook này trả ra true nếu component đã render, false nếu chưa render
    const [hasMounted, setHasMounted] = useState<boolean>(false);
    useEffect(() => {
        setHasMounted(true);
    }, []);

    return hasMounted;
}

// export const useScript = (url: string) => {
//     useEffect(() => {
//         const script = document.createElement('script');

//         script.src = url;
//         script.async = true;

//         document.body.appendChild(script);

//         return () => {
//             document.body.removeChild(script);
//         }
//     }, [url]);
// };
