/**
 * @param {number[][]} clips
 * @param {number} time
 * @return {number}
 */
var videoStitching = function(clips, time) {
    const segments = clips.reduce((acc, clip) => {
        const segment = acc[clip[0]];
        
        if (!segment) {
            acc[clip[0]] = clip;
            return acc;
        }
        
        const segmentLength = segment[1] - segment[0];
        const isLonger = clip[1] - clip[0] > segmentLength;
        
        if (isLonger) {
            acc[clip[0]] = clip;
            return acc;
        }
        
        return acc;
        
    }, {});
    
    const getPossibleSegment = (min, max, count) => {
        let longest = null;
        
        for(let i = min; i <= max; i++) {
            const segment = segments[i];
            
            if (!segment) continue;
            
            if (!longest) {
                longest = segment;
                continue;
            }
            
            if (segment[1] > longest[1]) {
                longest = segments[i];
            }
        }

        if (longest) {
            if (longest[1] < time) {
                return getPossibleSegment(longest[0] + 1, longest[1], count + 1);
            }
            
            if (longest[1] >= time) {
                return count + 1;
            }
        }
        
        return -1;
        
    }
    
    
    
    return getPossibleSegment(0, 0, 0);
};