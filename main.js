document.addEventListener('DOMContentLoaded', function() {
    'use strict';

    const nodeAT = document.querySelector('.Area__Top');
    const nodePi = document.querySelector('.Prof-inner');
    const nodeSi = document.querySelector('.Skill-inner');
    const nodeSB1 = document.querySelector('.Box1');
    const nodeSB2 = document.querySelector('.Box2');
    const nodeSB3 = document.querySelector('.Box3');
    const nodeWi = document.querySelector('.Works-inner');
    const nodeWi1 = document.querySelector('.Works-img');
    const nodeWi2 = document.querySelector('.Works-img2');
    const nodeWi3 = document.querySelector('.Works-img3');
    
    const observer = new IntersectionObserver((entries) => {
        console.log(entries);

        for(const entry of entries) {
            if (entry.intersectionRatio <= 0.2) {
                return;
            }

            entry.target.classList.add('intersected');
            observer.unobserve(entry.target);
        }

    }, {
        root: null,
        rootMargin: '-200px 0px 0px -100px',
        threshold: [0.2, 0.4, 0.8]
    });

    observer.observe(nodeAT);
    observer.observe(nodePi);
    observer.observe(nodeSi);
    observer.observe(nodeSB1);
    observer.observe(nodeSB2);
    observer.observe(nodeSB3);
    observer.observe(nodeWi);
    observer.observe(nodeWi1);
    observer.observe(nodeWi2);
    observer.observe(nodeWi3);
    
    
});