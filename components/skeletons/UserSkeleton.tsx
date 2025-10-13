const UserSkeleton = () => {
    return (
        <div className={'flex items-center gap-1.5'}>
            <div className={'skeleton size-6 rounded-full'}></div>
            <div className={'skeleton w-16 h-5'}></div>
        </div>
    );
}

export default UserSkeleton;