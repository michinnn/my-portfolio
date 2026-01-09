const MobileProjectContainer = ({
imageSrc,
projectName,
description,
backgroundClass = 'bg-palette3',
}) => {
    return (
        <div className='flex flex-col w-full shadow-top-lg'>
            <div className={`flex w-full ${backgroundClass} px-24 items-start`}>
                <div className='flex w-1/2 items-end'>
                    <img src={imageSrc}
                    className='mt-16'/>
                </div>
                <div className='flex flex-col justify-center mt-16'>
                    <h1 className='font-bebasneue text-palette5 text-8xl ml-16'>
                        {projectName}
                    </h1>
                    <p className='font-varela text-palette5 text-md ml-16'>
                        {description}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default MobileProjectContainer;