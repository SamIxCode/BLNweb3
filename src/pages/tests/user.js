import { useRouter } from 'next/router';

const User = () => {
    const router = useRouter();
    const { pid } = router.query;

    return <p>Post: {pid}</p>;
};

export default User;