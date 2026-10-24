kaplay({ background: [91, 166, 117] });

setCursor("none");

loadSprite("cursor", "assets/cursor.png");
loadSprite("asap", "assets/asap.png");
loadSprite("cursor-o", "assets/cursor-o.png");
loadSprite("tree", "assets/tree.png");
loadSprite("fire", "assets/fire.png", {
    sliceX: 2,
    frameWidth: 40,
    frameHeight: 49,
    anims: {
        "anim": {
            from: 0,
            to: 1,
            loop: true,
            speed: 6.67,
        },
    },
});


scene("canva", () => {

    for (let i = 0; i < 4; i++) {
        for (let e = 0; e < 3; e++) {

            const treeX = 250 + (i * 220);
            const treeY = 120 + (e * 140);

            add([
                sprite("tree"),
                pos(treeX, treeY),
                area(),
                anchor("center"),
            ]);

            const fire = add([
                sprite("fire"),
                pos(
                    treeX + rand(-40, 40),
                    treeY + rand(-30, 20)
                ),
                area(),
                anchor("center"),
                z(10),
                "fire",
            ]);

            const fire1 = add([
                sprite("fire"),
                pos(
                    treeX + rand(-50, 50),
                    treeY + rand(-60, 10)
                ),
                area(),
                anchor("center"),
                z(10),
                "fire",
            ]);

            fire.play("anim");
            fire1.play("anim");

        }
    }

    onClick("fire", (f) => {
        f.use(opacity(1));
        tween(
            f.opacity,
            0,
            0.3,
            (val) => f.opacity = val,
            easings.easeOutQuad
        ).then(() => {
            destroy(f);
        });
    });


    const cursor = add([
        sprite("cursor"),
        pos(0, 0),
        z(1000),
        area(),
    ]);

    onUpdate(() => {
        const currentMousePos = mousePos();
        cursor.pos = currentMousePos;
    });

    onMouseDown(() => {
        cursor.use(sprite("cursor-o"));
    });

    onMouseRelease(() => {
        cursor.use(sprite("cursor"));
    });
});

go("canva");