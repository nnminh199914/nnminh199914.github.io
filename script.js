
let engine = Matter.Engine.create();
        let render = Matter.Render.create({
            element: document.body.firstElementChild.firstElementChild,
            engine:engine ,
            options: {
                width: 800,
                height: 600,
                wireframes: false,
                background: "#C5D8A4"
            }
        });
        ////
         // add mouse control
        let mouse = Matter.Mouse.create(render.canvas);
        let mouseConstraint = Matter.MouseConstraint.create(engine, {
            mouse: mouse,
            constraint: {
            render: {visible: false}
        }
        });
        render.mouse = mouse;
        //parms: x,y,width,height,options
        //let ground = Matter.Bodies.rectangle(400,600,1000,60,{ isStatic: true}); 
        let boxA = Matter.Bodies.rectangle(400,200,80,80,{
            render: {
                fillStyle: "#534340"
            }
        });
        let boxB = Matter.Bodies.rectangle(450,50,230,70,{
                render: {
                    strokeStyle: '#ffffff',
                    sprite: {
                        texture: 'box.png',
                        xScale: 1,
                        yScale: 1
                    }
                }
            });
        ///
        if (typeof window !== 'undefined') {
        var updateGravity = function(event) {
            var orientation = typeof window.orientation !== 'undefined' ? window.orientation : 0,
                gravity = engine.gravity;

            if (orientation === 0) {
                gravity.x = Matter.Common.clamp(event.gamma, -90, 90) / 90;
                gravity.y = Matter.Common.clamp(event.beta, -90, 90) / 90;
            } else if (orientation === 180) {
                gravity.x = Matter.Common.clamp(event.gamma, -90, 90) / 90;
                gravity.y = Matter.Common.clamp(-event.beta, -90, 90) / 90;
            } else if (orientation === 90) {
                gravity.x = Matter.Common.clamp(event.beta, -90, 90) / 90;
                gravity.y = Matter.Common.clamp(-event.gamma, -90, 90) / 90;
            } else if (orientation === -90) {
                gravity.x = Matter.Common.clamp(-event.beta, -90, 90) / 90;
                gravity.y = Matter.Common.clamp(event.gamma, -90, 90) / 90;
            }
        };

        window.addEventListener('deviceorientation', updateGravity);
        }
        
        
        ///
        Matter.World.add(engine.world,[boxA,boxB,mouseConstraint,
            Matter.Bodies.rectangle(400, 0, 800, 01, { isStatic: true ,  render: {visible: true} }),
            Matter.Bodies.rectangle(400, 600, 800, 01, { isStatic: true,  render: {visible: true} }),
            Matter.Bodies.rectangle(800, 300, 1, 600, { isStatic: true,  render: {visible: true} }),
            Matter.Bodies.rectangle(0, 300, 01, 600, { isStatic: true,  render: {visible: true} })]);
        Matter.Engine.run(engine);
        Matter.Render.run(render);
        console.log(render.canvas.parentNode)
