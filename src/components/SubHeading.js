import React from 'react';

const SubHeading = React.memo(({
    heading,
    className,
}) => {
    return <div dangerouslySetInnerHTML={{ __html: heading }} className={className} /> ;
});

export default SubHeading;