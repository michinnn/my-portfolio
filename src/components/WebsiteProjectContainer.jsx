const WebsiteProjectContainer = ({
imageSrc,
projectName,
description,
backgroundClass = 'bg-palette2',
}) => {
    return (
        <div className='flex flex-col w-full'>
            <div className={`flex w-full ${backgroundClass} px-24 items-start`}>
            <div className='flex flex-col w-1/2 justify-center mt-16'>
            <h1 className='font-bebasneue text-palette5 text-8xl'>
                {projectName}
            </h1>
            <p className='font-varela text-palette5 text-md'>
                {description}
            </p>
            </div>
            <div className='flex w-1/2 items-end'>
                <img src={imageSrc} 
                className='mt-16'/>
            </div>
            </div>
        </div>
    );
};

export default WebsiteProjectContainer;