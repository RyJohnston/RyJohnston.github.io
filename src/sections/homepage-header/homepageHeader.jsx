import './homepage-header.css';

export default function Header() {
    return  (
        <div id='header' className='container'>
            <div>
                <h1>RYAN</h1>
                <h1>JOHNSTON</h1>
                <h2>Design | Develop</h2>
                {/* <div className='arrow'>
                    <svg>
                        <defs>
                            <marker id='head' orient="auto"
                                markerWidth='4' markerHeight='4'
                                refX='0.1' refY='2' fill='#70161e'>
                                <path d='M0,0 V4 L2,2 Z'/>
                            </marker>
                        </defs>
                            <path
                            id='arrow-line'
                            markerEnd='url(#head)'
                            strokeWidth='4'
                            fill='none' stroke='#70161e'
                            d='M0,20, 0 140,140'
                            />
                    </svg>
                </div> */}
            </div>
            <div id="blob"></div>
        </div>
            
    );
};