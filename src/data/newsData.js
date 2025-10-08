import { img_1, img_2, img_3, bg_gv } from '~/utils/images';

export const newsData = [
    {
        id: 1,
        slug: 'qa-with-thomas-mahler',
        imageSrc: img_1,
        title: 'Q&A with Thomas Mahler',
        description:
            'This month we celebrate 8 years since the release of Ori and the Blind Forest on March 11, 2015. Five years later, Ori and the Will of the Wisps followed...',
        layoutType: 'qa',
        contentBlocks: [
            { type: 'meta', content: 'March 28, 2023' },
            {
                type: 'paragraph',
                content:
                    'This month we celebrate 8 years since the release of Ori and the Blind Forest on March 11, 2015. Five years later, Ori and the Will of the Wisps followed suit on March 11, 2020. It has been an incredible journey and we are so grateful for the opportunity we had to work with Moon Studios on this series.',
            },
            {
                type: 'paragraph',
                content:
                    'To commemorate the momentous occasion, we asked Thomas Mahler, CEO and Game Director of Moon Studios, about the time he spent on Ori. Check out the Q&A below!',
            },
            // Question 1
            {
                type: 'question',
                content:
                    'It’s been 8 years since the release of the first Ori game. When you look back to the beginning of the Ori franchise, what aspect of the game design and development are you most proud of?',
            },
            {
                type: 'answer',
                content:
                    'I think that answer would be different for every developer at Moon depending on which department they worked in! I was obviously the most proud of how the controls and the level design came together, how we managed to create a ‘flow’ that just stayed entertaining. During development, often when I had to just quickly try to reproduce a bug, I often found myself just continuing playing even after I found the issue I was looking for simply because the game was just so fun to play. Fairly early on already we managed to create that ‘Damn, I died, just one more try!’ feeling within players’ heads and that made it very clear to us that we made the whole recipe work.',
            },
            {
                type: 'statement',
                content: 'Let’s talk about the character design.',
            },
            // Question 2
            {
                type: 'question',
                content:
                    'What was the most technically challenging aspect to develop from either Ori game that led to a great outcome overall?',
            },
            {
                type: 'answer',
                content:
                    'Thomas: For Blind Forest, everything was a challenge since we had no idea how we’d even accomplish what we set out to do. We originally started doing the first prototypes in a 2d engine named ‘Construct’, but then decided to move it all to Unity because it simply gave us more power and development tools that we felt like we needed. I spent months just tweaking the controls with David, one of our programmers, because we always felt like that’s the most important thing to tackle in a platforming game: If we can ensure that the game is fun to play even in a simple grayboxed environment, imagine how much fun players would have if they’d play through the entire game!',
            },
            {
                type: 'answer',
                content:
                    'We decided early on that we wanted a sprite-based approach to make the 3d characters integrate better with the 2d art that we had to paint. What we didn’t factor in at first was that we’d end up creating these huuuuge characters like Kuro who really needed a 1024×1024 sprite to hold up visually. And given the fluidity we wanted in our animations and that Ori was originally supposed to come out on the Xbox 360, we very often crashed the system because we ran out of memory. Our Tech Department had to be incredibly crafty and come up with clever proprietary compression algorithms to make all of this even possible. We ultimately decided to launch on the Xbox One instead and while we had more memory there, we also had to bump the resolution from 720p to 1080p, so while we were first dreaming about all the things we could accomplish with that new, exciting hardware, it was still tough until the very end to optimize everything in order to make the game feel as buttery smooth as we always wanted it to be.',
            },
            {
                type: 'answer',
                content:
                    'For Will of the Wisps, I’d say easily the biggest challenge was the Nintendo Switch Port: With Ori being mostly a 2d game, a lot of the optimizations you get ‘for free’ within modern game engines don’t actually apply and we tried to push what can be done visually within a 2d Platforming game so much that on launch we even had some performance issues on Xbox One. It took us a few weeks to release a patch that then finally gave all players a fully optimized experience. So when we then set out to port this game to a hardware that had decidedly lower specs than the one where we initially already struggled to keep our 60fps target, we had a lot of people even internally at Moon doubting that delivering a 60fps port to Nintendo Switch would even be possible, especially given that we didn’t want to sacrifice too much of Ori’s visuals.',
            },
            {
                type: 'answer',
                content:
                    'Our crafty Tech Team prevailed though: While our first tests ran at a measly 15-20fps, slowly but surely we optimized and optimized and came up with some pretty neat tricks and voila, we managed to do the impossible: Ori and the Will of the Wisps running at 60fps on the Nintendo Switch!',
            },
            { type: 'image', src: bg_gv, alt: 'Ori movement animation sequence' },
            // Question 3
            {
                type: 'question',
                content:
                    'Many fans always praise not only the art design but the music created by Gareth Coker. What was working with Gareth like, and what was it like to see the music come together after working on it for so long?',
            },
            {
                type: 'answer',
                content:
                    'Thomas: Working with Gareth was fantastic! I initially ‘found’ Gareth when he was still very early-on in his career and I just saw a lot of potential. I pitched him the idea behind Ori when we were still in an early prototype stage and he composed a few tracks for us to show us what direction he’d take and it felt like he ‘got it’. And then we thought the best idea to keep his creative juices flowing was to just be as open and transparent as possible with him, so he always had insight into every single thing we were doing. He saw every storyboard, every sketch, everything really, just so he could stay updated and get some ideas even if he wasn’t working every day on Ori.',
            },
            {
                type: 'answer',
                content:
                    'We tried to do a lot of ‘daring’ stuff in the Ori games. When we started, it wasn’t a common thing at all to introduce a lot of story and cutscenes into a platforming game, but we always felt like that’s the direction we wanted to head into, so we just did it. And then it was all about figuring out HOW we’d actually accomplish that and how we’d make players feel something during these moments and music was obviously a huge part of that. So we included Gareth into all these discussions… If Ori walks from here to there, how long is it acceptable for players to walk slowly? How do we keep that stuff interesting? How should the music flow during these sequences, so that every beat emotionally delivers what we want to convey?',
            },
            {
                type: 'answer',
                content:
                    'And it wasn’t always clear that we were heading into the right direction: Creating Ori and the Blind Forest’s prologue ultimately took us a whopping 8 months and there were many moments when what we had built just didn’t feel ‘right’ yet. It took a lot of iteration and everybody had to chip in with feedback and thoughts constantly in order to make this all work. It was a huge team effort and Gareth was just part of our team. He didn’t just comment on Music and Audio, but also gave input on how we should approach this or that moment in order to achieve the biggest impact. As you delved into the second game, Will of the Wisps, how much of the other lore (environments, characters, etc.) was already thought of beforehand during the first game, and what was your process like as you created the story of Ori and Ku? None of it since we didn’t even consider making a sequel at all while we were still working on Ori and the Blind Forest! In true Tolkien fashion, the tale grew in the telling. As for the story behind Ori and Ku, we went through many, many iterations until we decided on what direction we want to take these characters into. Ultimately, what appealed to us the most was to center the story around the basic premise that hatred is nurture, not nature and we used Ku and Shriek to achieve that: While one character grew up in a loving environment, the other grew up being despised and judged. Ori then had to deal with the outcome of that.',
            },
            { type: 'image', src: bg_gv, alt: 'Ori movement animation sequence' },
            // Question 4
            {
                type: 'question',
                content: 'What is your favorite story moments from either of the games?',
            },
            {
                type: 'answer',
                content:
                    'Thomas: For Blind Forest, I’d say the ending is what I’m the most proud of. In many ways Ori and the Blind Forest was me saying thank you to my mom, who’s always been there for me. That’s probably also why the ‘mom’ character is written the way she is in Blind Forest. The ending was all about creating this moment where we’d see two mothers facing each other and hopefully conveying the message that a mother’s love can move mountains. Kuro reflecting on what she had done and finally ending her blind rage due to what happened to her own children when she saw what she had done to another mother always felt like a beautiful message to me.',
            },
            {
                type: 'answer',
                content:
                    'On Will of the Wisps, I’m still amazed that Microsoft let us tell the story that we wanted to tell since it had a very definitive ending. While Blind Forest was a coming-of-age story about this youth who became an orphan who had to learn about themselves, we approached Will of the Wisps with the idea that now Ori’s story was about that second half of everybody’s life instead in order to finally ‘complete the circle’: Ori had grown up, Ori helped raising a child, Ori then had to help that child find her way through life and ultimately Ori had to become a parent even if that meant sacrificing everything that had come before.',
            },
            {
                type: 'answer',
                content:
                    'We spent around a decade at Moon crafting the Ori saga, so throughout development, many of us started having children (which explains the many ‘Development Babies’ in our credits!), so I think we just let that influence the story we wanted to tell and we knew we wanted to capture how bitter-sweet moving on in life can be: Always remember that when one door closes, another one opens.',
            },
            { type: 'image', src: bg_gv, alt: 'Ori movement animation sequence' },
            // Question 5
            {
                type: 'question',
                content:
                    'Question from the community: what was the significance of the owls that inhabited the lands, if any?',
            },
            {
                type: 'answer',
                content:
                    'Question from the community: what was the significance of the owls that inhabited the lands, if any?',
            },
            // Question 6
            {
                type: 'question',
                content:
                    'Question from the community: Do you have any interesting lore to share behind the spirit wells and spirit trials?',
            },
            {
                type: 'answer',
                content: 'Thomas: No, those were mostly born out of mechanical reasons.',
            },
            // Question 7
            {
                type: 'question',
                content:
                    'You have a very vibrant and active Ori community not only on our Discord and all around the world – do you have anything you’d like to share with them?',
            },
            {
                type: 'answer',
                content:
                    'Thomas: As always, I think we’d just like to thank everybody who’s been there for us throughout the years – We couldn’t keep making games if we wouldn’t have a wonderful fanbase that supported us over the years! It hasn’t always been easy and the amount of love we received has definitely always helped to give us the motivation to endure all the hardships that game development comes with. We hope everybody will again join us on our next journey!',
            },
            { type: 'image', src: bg_gv, alt: 'Ori movement animation sequence' },
            { type: 'image', src: img_3, alt: 'Ori movement animation sequence' },
        ],
    },
    {
        id: 2,
        slug: 'gamasutra-qa-designing-the-gorgeous',
        imageSrc: img_2,
        title: 'Gamasutra Q&A: Designing the gorgeous...',
        description:
            'May 18, 2020 | By John Harris Released earlier this year, the “metroidvania” Ori and the Will of the Wisps is the critically-acclaimed, commercially successful sequel to 2015’s Ori and the Blind Forest….',
        layoutType: 'article',
        contentBlocks: [
            { type: 'meta', content: 'May 18, 2020 | By John Harris' },
            {
                type: 'paragraph',
                content:
                    'Released earlier this year, the “metroidvania” Ori and the Will of the Wisps is the critically-acclaimed, commercially successful sequel to 2015’s Ori and the Blind Forest. The beautiful game features a fluid moveset that makes the already-gorgeous world a joy to explore. And the boss fights… we’ll let you discover those on your own.',
            },
            {
                type: 'subheading',
                content:
                    'Metroidvanias are a lot more common now than they were even in the GBA era, when we had to wait years between doses of Samus and not-Alucard. What design decisions did you make to help distinguish this game in the genre?',
            },
            {
                type: 'paragraph',
                content:
                    'A: From the get-go, we decided that Ori shouldn’t just be a Metroidvania, but a Metroidvania + a Platformer. That meant that we invested a whole lot more into our character controller than a lot of other titles in the genre. For Blind Forest, we spent more than 2 years on just the character controller alone...',
            },
            {
                type: 'subheading',
                content: 'Ori has a gratifyingly graceful and rapid movement. How did you manage to pull that off?',
            },
            {
                type: 'paragraph',
                content: `That's a question we get asked a lot. It's really just a whole bunch of little things that we do that come together in the end. It's a bit like asking a chef to give you the recipe for a Michelin Star dish - I could give you a list of all the different things that went into this, but there's a lot of little details that matter. In our case, the foundation is really our animation system - We don't use keyframes, we have a fully procedural animation system that blends between different poses based on a whole lot of different variables and we spent a great deal of time just making sure that Ori always feels fluid and responsive.`,
            },
            {
                type: 'link',
                text: 'Read the rest of the article here!',
                href: 'https://www.gamedeveloper.com/design/q-a-designing-the-gorgeous-metroidvania-ori-and-the-will-of-the-wisps', // Đường link thực tế
            },
        ],
    },
    {
        id: 1,
        slug: 'qa-with-thomas-mahler',
        imageSrc: img_1,
        title: 'Q&A with Thomas Mahler',
        description:
            'This month we celebrate 8 years since the release of Ori and the Blind Forest on March 11, 2015. Five years later, Ori and the Will of the Wisps followed...',
        layoutType: 'qa',
        contentBlocks: [
            { type: 'meta', content: 'March 28, 2023' },
            {
                type: 'paragraph',
                content:
                    'This month we celebrate 8 years since the release of Ori and the Blind Forest on March 11, 2015. Five years later, Ori and the Will of the Wisps followed suit on March 11, 2020. It has been an incredible journey and we are so grateful for the opportunity we had to work with Moon Studios on this series.',
            },
            {
                type: 'paragraph',
                content:
                    'To commemorate the momentous occasion, we asked Thomas Mahler, CEO and Game Director of Moon Studios, about the time he spent on Ori. Check out the Q&A below!',
            },
            // Question 1
            {
                type: 'question',
                content:
                    'It’s been 8 years since the release of the first Ori game. When you look back to the beginning of the Ori franchise, what aspect of the game design and development are you most proud of?',
            },
            {
                type: 'answer',
                content:
                    'I think that answer would be different for every developer at Moon depending on which department they worked in! I was obviously the most proud of how the controls and the level design came together, how we managed to create a ‘flow’ that just stayed entertaining. During development, often when I had to just quickly try to reproduce a bug, I often found myself just continuing playing even after I found the issue I was looking for simply because the game was just so fun to play. Fairly early on already we managed to create that ‘Damn, I died, just one more try!’ feeling within players’ heads and that made it very clear to us that we made the whole recipe work.',
            },
            {
                type: 'statement',
                content: 'Let’s talk about the character design.',
            },
            // Question 2
            {
                type: 'question',
                content:
                    'What was the most technically challenging aspect to develop from either Ori game that led to a great outcome overall?',
            },
            {
                type: 'answer',
                content:
                    'Thomas: For Blind Forest, everything was a challenge since we had no idea how we’d even accomplish what we set out to do. We originally started doing the first prototypes in a 2d engine named ‘Construct’, but then decided to move it all to Unity because it simply gave us more power and development tools that we felt like we needed. I spent months just tweaking the controls with David, one of our programmers, because we always felt like that’s the most important thing to tackle in a platforming game: If we can ensure that the game is fun to play even in a simple grayboxed environment, imagine how much fun players would have if they’d play through the entire game!',
            },
            {
                type: 'answer',
                content:
                    'We decided early on that we wanted a sprite-based approach to make the 3d characters integrate better with the 2d art that we had to paint. What we didn’t factor in at first was that we’d end up creating these huuuuge characters like Kuro who really needed a 1024×1024 sprite to hold up visually. And given the fluidity we wanted in our animations and that Ori was originally supposed to come out on the Xbox 360, we very often crashed the system because we ran out of memory. Our Tech Department had to be incredibly crafty and come up with clever proprietary compression algorithms to make all of this even possible. We ultimately decided to launch on the Xbox One instead and while we had more memory there, we also had to bump the resolution from 720p to 1080p, so while we were first dreaming about all the things we could accomplish with that new, exciting hardware, it was still tough until the very end to optimize everything in order to make the game feel as buttery smooth as we always wanted it to be.',
            },
            {
                type: 'answer',
                content:
                    'For Will of the Wisps, I’d say easily the biggest challenge was the Nintendo Switch Port: With Ori being mostly a 2d game, a lot of the optimizations you get ‘for free’ within modern game engines don’t actually apply and we tried to push what can be done visually within a 2d Platforming game so much that on launch we even had some performance issues on Xbox One. It took us a few weeks to release a patch that then finally gave all players a fully optimized experience. So when we then set out to port this game to a hardware that had decidedly lower specs than the one where we initially already struggled to keep our 60fps target, we had a lot of people even internally at Moon doubting that delivering a 60fps port to Nintendo Switch would even be possible, especially given that we didn’t want to sacrifice too much of Ori’s visuals.',
            },
            {
                type: 'answer',
                content:
                    'Our crafty Tech Team prevailed though: While our first tests ran at a measly 15-20fps, slowly but surely we optimized and optimized and came up with some pretty neat tricks and voila, we managed to do the impossible: Ori and the Will of the Wisps running at 60fps on the Nintendo Switch!',
            },
            { type: 'image', src: bg_gv, alt: 'Ori movement animation sequence' },
            // Question 3
            {
                type: 'question',
                content:
                    'Many fans always praise not only the art design but the music created by Gareth Coker. What was working with Gareth like, and what was it like to see the music come together after working on it for so long?',
            },
            {
                type: 'answer',
                content:
                    'Thomas: Working with Gareth was fantastic! I initially ‘found’ Gareth when he was still very early-on in his career and I just saw a lot of potential. I pitched him the idea behind Ori when we were still in an early prototype stage and he composed a few tracks for us to show us what direction he’d take and it felt like he ‘got it’. And then we thought the best idea to keep his creative juices flowing was to just be as open and transparent as possible with him, so he always had insight into every single thing we were doing. He saw every storyboard, every sketch, everything really, just so he could stay updated and get some ideas even if he wasn’t working every day on Ori.',
            },
            {
                type: 'answer',
                content:
                    'We tried to do a lot of ‘daring’ stuff in the Ori games. When we started, it wasn’t a common thing at all to introduce a lot of story and cutscenes into a platforming game, but we always felt like that’s the direction we wanted to head into, so we just did it. And then it was all about figuring out HOW we’d actually accomplish that and how we’d make players feel something during these moments and music was obviously a huge part of that. So we included Gareth into all these discussions… If Ori walks from here to there, how long is it acceptable for players to walk slowly? How do we keep that stuff interesting? How should the music flow during these sequences, so that every beat emotionally delivers what we want to convey?',
            },
            {
                type: 'answer',
                content:
                    'And it wasn’t always clear that we were heading into the right direction: Creating Ori and the Blind Forest’s prologue ultimately took us a whopping 8 months and there were many moments when what we had built just didn’t feel ‘right’ yet. It took a lot of iteration and everybody had to chip in with feedback and thoughts constantly in order to make this all work. It was a huge team effort and Gareth was just part of our team. He didn’t just comment on Music and Audio, but also gave input on how we should approach this or that moment in order to achieve the biggest impact. As you delved into the second game, Will of the Wisps, how much of the other lore (environments, characters, etc.) was already thought of beforehand during the first game, and what was your process like as you created the story of Ori and Ku? None of it since we didn’t even consider making a sequel at all while we were still working on Ori and the Blind Forest! In true Tolkien fashion, the tale grew in the telling. As for the story behind Ori and Ku, we went through many, many iterations until we decided on what direction we want to take these characters into. Ultimately, what appealed to us the most was to center the story around the basic premise that hatred is nurture, not nature and we used Ku and Shriek to achieve that: While one character grew up in a loving environment, the other grew up being despised and judged. Ori then had to deal with the outcome of that.',
            },
            { type: 'image', src: bg_gv, alt: 'Ori movement animation sequence' },
            // Question 4
            {
                type: 'question',
                content: 'What is your favorite story moments from either of the games?',
            },
            {
                type: 'answer',
                content:
                    'Thomas: For Blind Forest, I’d say the ending is what I’m the most proud of. In many ways Ori and the Blind Forest was me saying thank you to my mom, who’s always been there for me. That’s probably also why the ‘mom’ character is written the way she is in Blind Forest. The ending was all about creating this moment where we’d see two mothers facing each other and hopefully conveying the message that a mother’s love can move mountains. Kuro reflecting on what she had done and finally ending her blind rage due to what happened to her own children when she saw what she had done to another mother always felt like a beautiful message to me.',
            },
            {
                type: 'answer',
                content:
                    'On Will of the Wisps, I’m still amazed that Microsoft let us tell the story that we wanted to tell since it had a very definitive ending. While Blind Forest was a coming-of-age story about this youth who became an orphan who had to learn about themselves, we approached Will of the Wisps with the idea that now Ori’s story was about that second half of everybody’s life instead in order to finally ‘complete the circle’: Ori had grown up, Ori helped raising a child, Ori then had to help that child find her way through life and ultimately Ori had to become a parent even if that meant sacrificing everything that had come before.',
            },
            {
                type: 'answer',
                content:
                    'We spent around a decade at Moon crafting the Ori saga, so throughout development, many of us started having children (which explains the many ‘Development Babies’ in our credits!), so I think we just let that influence the story we wanted to tell and we knew we wanted to capture how bitter-sweet moving on in life can be: Always remember that when one door closes, another one opens.',
            },
            { type: 'image', src: bg_gv, alt: 'Ori movement animation sequence' },
            // Question 5
            {
                type: 'question',
                content:
                    'Question from the community: what was the significance of the owls that inhabited the lands, if any?',
            },
            {
                type: 'answer',
                content:
                    'Question from the community: what was the significance of the owls that inhabited the lands, if any?',
            },
            // Question 6
            {
                type: 'question',
                content:
                    'Question from the community: Do you have any interesting lore to share behind the spirit wells and spirit trials?',
            },
            {
                type: 'answer',
                content: 'Thomas: No, those were mostly born out of mechanical reasons.',
            },
            // Question 7
            {
                type: 'question',
                content:
                    'You have a very vibrant and active Ori community not only on our Discord and all around the world – do you have anything you’d like to share with them?',
            },
            {
                type: 'answer',
                content:
                    'Thomas: As always, I think we’d just like to thank everybody who’s been there for us throughout the years – We couldn’t keep making games if we wouldn’t have a wonderful fanbase that supported us over the years! It hasn’t always been easy and the amount of love we received has definitely always helped to give us the motivation to endure all the hardships that game development comes with. We hope everybody will again join us on our next journey!',
            },
            { type: 'image', src: bg_gv, alt: 'Ori movement animation sequence' },
            { type: 'image', src: img_3, alt: 'Ori movement animation sequence' },
        ],
    },
    {
        id: 2,
        slug: 'gamasutra-qa-designing-the-gorgeous',
        imageSrc: img_2,
        title: 'Gamasutra Q&A: Designing the gorgeous...',
        description:
            'May 18, 2020 | By John Harris Released earlier this year, the “metroidvania” Ori and the Will of the Wisps is the critically-acclaimed, commercially successful sequel to 2015’s Ori and the Blind Forest….',
        layoutType: 'article',
        contentBlocks: [
            { type: 'meta', content: 'May 18, 2020 | By John Harris' },
            {
                type: 'paragraph',
                content:
                    'Released earlier this year, the “metroidvania” Ori and the Will of the Wisps is the critically-acclaimed, commercially successful sequel to 2015’s Ori and the Blind Forest. The beautiful game features a fluid moveset that makes the already-gorgeous world a joy to explore. And the boss fights… we’ll let you discover those on your own.',
            },
            {
                type: 'subheading',
                content:
                    'Metroidvanias are a lot more common now than they were even in the GBA era, when we had to wait years between doses of Samus and not-Alucard. What design decisions did you make to help distinguish this game in the genre?',
            },
            {
                type: 'paragraph',
                content:
                    'A: From the get-go, we decided that Ori shouldn’t just be a Metroidvania, but a Metroidvania + a Platformer. That meant that we invested a whole lot more into our character controller than a lot of other titles in the genre. For Blind Forest, we spent more than 2 years on just the character controller alone...',
            },
            {
                type: 'subheading',
                content: 'Ori has a gratifyingly graceful and rapid movement. How did you manage to pull that off?',
            },
            {
                type: 'paragraph',
                content: `That's a question we get asked a lot. It's really just a whole bunch of little things that we do that come together in the end. It's a bit like asking a chef to give you the recipe for a Michelin Star dish - I could give you a list of all the different things that went into this, but there's a lot of little details that matter. In our case, the foundation is really our animation system - We don't use keyframes, we have a fully procedural animation system that blends between different poses based on a whole lot of different variables and we spent a great deal of time just making sure that Ori always feels fluid and responsive.`,
            },
            {
                type: 'link',
                text: 'Read the rest of the article here!',
                href: 'https://www.gamedeveloper.com/design/q-a-designing-the-gorgeous-metroidvania-ori-and-the-will-of-the-wisps', // Đường link thực tế
            },
        ],
    },
    {
        id: 1,
        slug: 'qa-with-thomas-mahler',
        imageSrc: img_1,
        title: 'Q&A with Thomas Mahler',
        description:
            'This month we celebrate 8 years since the release of Ori and the Blind Forest on March 11, 2015. Five years later, Ori and the Will of the Wisps followed...',
        layoutType: 'qa',
        contentBlocks: [
            { type: 'meta', content: 'March 28, 2023' },
            {
                type: 'paragraph',
                content:
                    'This month we celebrate 8 years since the release of Ori and the Blind Forest on March 11, 2015. Five years later, Ori and the Will of the Wisps followed suit on March 11, 2020. It has been an incredible journey and we are so grateful for the opportunity we had to work with Moon Studios on this series.',
            },
            {
                type: 'paragraph',
                content:
                    'To commemorate the momentous occasion, we asked Thomas Mahler, CEO and Game Director of Moon Studios, about the time he spent on Ori. Check out the Q&A below!',
            },
            // Question 1
            {
                type: 'question',
                content:
                    'It’s been 8 years since the release of the first Ori game. When you look back to the beginning of the Ori franchise, what aspect of the game design and development are you most proud of?',
            },
            {
                type: 'answer',
                content:
                    'I think that answer would be different for every developer at Moon depending on which department they worked in! I was obviously the most proud of how the controls and the level design came together, how we managed to create a ‘flow’ that just stayed entertaining. During development, often when I had to just quickly try to reproduce a bug, I often found myself just continuing playing even after I found the issue I was looking for simply because the game was just so fun to play. Fairly early on already we managed to create that ‘Damn, I died, just one more try!’ feeling within players’ heads and that made it very clear to us that we made the whole recipe work.',
            },
            {
                type: 'statement',
                content: 'Let’s talk about the character design.',
            },
            // Question 2
            {
                type: 'question',
                content:
                    'What was the most technically challenging aspect to develop from either Ori game that led to a great outcome overall?',
            },
            {
                type: 'answer',
                content:
                    'Thomas: For Blind Forest, everything was a challenge since we had no idea how we’d even accomplish what we set out to do. We originally started doing the first prototypes in a 2d engine named ‘Construct’, but then decided to move it all to Unity because it simply gave us more power and development tools that we felt like we needed. I spent months just tweaking the controls with David, one of our programmers, because we always felt like that’s the most important thing to tackle in a platforming game: If we can ensure that the game is fun to play even in a simple grayboxed environment, imagine how much fun players would have if they’d play through the entire game!',
            },
            {
                type: 'answer',
                content:
                    'We decided early on that we wanted a sprite-based approach to make the 3d characters integrate better with the 2d art that we had to paint. What we didn’t factor in at first was that we’d end up creating these huuuuge characters like Kuro who really needed a 1024×1024 sprite to hold up visually. And given the fluidity we wanted in our animations and that Ori was originally supposed to come out on the Xbox 360, we very often crashed the system because we ran out of memory. Our Tech Department had to be incredibly crafty and come up with clever proprietary compression algorithms to make all of this even possible. We ultimately decided to launch on the Xbox One instead and while we had more memory there, we also had to bump the resolution from 720p to 1080p, so while we were first dreaming about all the things we could accomplish with that new, exciting hardware, it was still tough until the very end to optimize everything in order to make the game feel as buttery smooth as we always wanted it to be.',
            },
            {
                type: 'answer',
                content:
                    'For Will of the Wisps, I’d say easily the biggest challenge was the Nintendo Switch Port: With Ori being mostly a 2d game, a lot of the optimizations you get ‘for free’ within modern game engines don’t actually apply and we tried to push what can be done visually within a 2d Platforming game so much that on launch we even had some performance issues on Xbox One. It took us a few weeks to release a patch that then finally gave all players a fully optimized experience. So when we then set out to port this game to a hardware that had decidedly lower specs than the one where we initially already struggled to keep our 60fps target, we had a lot of people even internally at Moon doubting that delivering a 60fps port to Nintendo Switch would even be possible, especially given that we didn’t want to sacrifice too much of Ori’s visuals.',
            },
            {
                type: 'answer',
                content:
                    'Our crafty Tech Team prevailed though: While our first tests ran at a measly 15-20fps, slowly but surely we optimized and optimized and came up with some pretty neat tricks and voila, we managed to do the impossible: Ori and the Will of the Wisps running at 60fps on the Nintendo Switch!',
            },
            { type: 'image', src: bg_gv, alt: 'Ori movement animation sequence' },
            // Question 3
            {
                type: 'question',
                content:
                    'Many fans always praise not only the art design but the music created by Gareth Coker. What was working with Gareth like, and what was it like to see the music come together after working on it for so long?',
            },
            {
                type: 'answer',
                content:
                    'Thomas: Working with Gareth was fantastic! I initially ‘found’ Gareth when he was still very early-on in his career and I just saw a lot of potential. I pitched him the idea behind Ori when we were still in an early prototype stage and he composed a few tracks for us to show us what direction he’d take and it felt like he ‘got it’. And then we thought the best idea to keep his creative juices flowing was to just be as open and transparent as possible with him, so he always had insight into every single thing we were doing. He saw every storyboard, every sketch, everything really, just so he could stay updated and get some ideas even if he wasn’t working every day on Ori.',
            },
            {
                type: 'answer',
                content:
                    'We tried to do a lot of ‘daring’ stuff in the Ori games. When we started, it wasn’t a common thing at all to introduce a lot of story and cutscenes into a platforming game, but we always felt like that’s the direction we wanted to head into, so we just did it. And then it was all about figuring out HOW we’d actually accomplish that and how we’d make players feel something during these moments and music was obviously a huge part of that. So we included Gareth into all these discussions… If Ori walks from here to there, how long is it acceptable for players to walk slowly? How do we keep that stuff interesting? How should the music flow during these sequences, so that every beat emotionally delivers what we want to convey?',
            },
            {
                type: 'answer',
                content:
                    'And it wasn’t always clear that we were heading into the right direction: Creating Ori and the Blind Forest’s prologue ultimately took us a whopping 8 months and there were many moments when what we had built just didn’t feel ‘right’ yet. It took a lot of iteration and everybody had to chip in with feedback and thoughts constantly in order to make this all work. It was a huge team effort and Gareth was just part of our team. He didn’t just comment on Music and Audio, but also gave input on how we should approach this or that moment in order to achieve the biggest impact. As you delved into the second game, Will of the Wisps, how much of the other lore (environments, characters, etc.) was already thought of beforehand during the first game, and what was your process like as you created the story of Ori and Ku? None of it since we didn’t even consider making a sequel at all while we were still working on Ori and the Blind Forest! In true Tolkien fashion, the tale grew in the telling. As for the story behind Ori and Ku, we went through many, many iterations until we decided on what direction we want to take these characters into. Ultimately, what appealed to us the most was to center the story around the basic premise that hatred is nurture, not nature and we used Ku and Shriek to achieve that: While one character grew up in a loving environment, the other grew up being despised and judged. Ori then had to deal with the outcome of that.',
            },
            { type: 'image', src: bg_gv, alt: 'Ori movement animation sequence' },
            // Question 4
            {
                type: 'question',
                content: 'What is your favorite story moments from either of the games?',
            },
            {
                type: 'answer',
                content:
                    'Thomas: For Blind Forest, I’d say the ending is what I’m the most proud of. In many ways Ori and the Blind Forest was me saying thank you to my mom, who’s always been there for me. That’s probably also why the ‘mom’ character is written the way she is in Blind Forest. The ending was all about creating this moment where we’d see two mothers facing each other and hopefully conveying the message that a mother’s love can move mountains. Kuro reflecting on what she had done and finally ending her blind rage due to what happened to her own children when she saw what she had done to another mother always felt like a beautiful message to me.',
            },
            {
                type: 'answer',
                content:
                    'On Will of the Wisps, I’m still amazed that Microsoft let us tell the story that we wanted to tell since it had a very definitive ending. While Blind Forest was a coming-of-age story about this youth who became an orphan who had to learn about themselves, we approached Will of the Wisps with the idea that now Ori’s story was about that second half of everybody’s life instead in order to finally ‘complete the circle’: Ori had grown up, Ori helped raising a child, Ori then had to help that child find her way through life and ultimately Ori had to become a parent even if that meant sacrificing everything that had come before.',
            },
            {
                type: 'answer',
                content:
                    'We spent around a decade at Moon crafting the Ori saga, so throughout development, many of us started having children (which explains the many ‘Development Babies’ in our credits!), so I think we just let that influence the story we wanted to tell and we knew we wanted to capture how bitter-sweet moving on in life can be: Always remember that when one door closes, another one opens.',
            },
            { type: 'image', src: bg_gv, alt: 'Ori movement animation sequence' },
            // Question 5
            {
                type: 'question',
                content:
                    'Question from the community: what was the significance of the owls that inhabited the lands, if any?',
            },
            {
                type: 'answer',
                content:
                    'Question from the community: what was the significance of the owls that inhabited the lands, if any?',
            },
            // Question 6
            {
                type: 'question',
                content:
                    'Question from the community: Do you have any interesting lore to share behind the spirit wells and spirit trials?',
            },
            {
                type: 'answer',
                content: 'Thomas: No, those were mostly born out of mechanical reasons.',
            },
            // Question 7
            {
                type: 'question',
                content:
                    'You have a very vibrant and active Ori community not only on our Discord and all around the world – do you have anything you’d like to share with them?',
            },
            {
                type: 'answer',
                content:
                    'Thomas: As always, I think we’d just like to thank everybody who’s been there for us throughout the years – We couldn’t keep making games if we wouldn’t have a wonderful fanbase that supported us over the years! It hasn’t always been easy and the amount of love we received has definitely always helped to give us the motivation to endure all the hardships that game development comes with. We hope everybody will again join us on our next journey!',
            },
            { type: 'image', src: bg_gv, alt: 'Ori movement animation sequence' },
            { type: 'image', src: img_3, alt: 'Ori movement animation sequence' },
        ],
    },
    {
        id: 2,
        slug: 'gamasutra-qa-designing-the-gorgeous',
        imageSrc: img_2,
        title: 'Gamasutra Q&A: Designing the gorgeous...',
        description:
            'May 18, 2020 | By John Harris Released earlier this year, the “metroidvania” Ori and the Will of the Wisps is the critically-acclaimed, commercially successful sequel to 2015’s Ori and the Blind Forest….',
        layoutType: 'article',
        contentBlocks: [
            { type: 'meta', content: 'May 18, 2020 | By John Harris' },
            {
                type: 'paragraph',
                content:
                    'Released earlier this year, the “metroidvania” Ori and the Will of the Wisps is the critically-acclaimed, commercially successful sequel to 2015’s Ori and the Blind Forest. The beautiful game features a fluid moveset that makes the already-gorgeous world a joy to explore. And the boss fights… we’ll let you discover those on your own.',
            },
            {
                type: 'subheading',
                content:
                    'Metroidvanias are a lot more common now than they were even in the GBA era, when we had to wait years between doses of Samus and not-Alucard. What design decisions did you make to help distinguish this game in the genre?',
            },
            {
                type: 'paragraph',
                content:
                    'A: From the get-go, we decided that Ori shouldn’t just be a Metroidvania, but a Metroidvania + a Platformer. That meant that we invested a whole lot more into our character controller than a lot of other titles in the genre. For Blind Forest, we spent more than 2 years on just the character controller alone...',
            },
            {
                type: 'subheading',
                content: 'Ori has a gratifyingly graceful and rapid movement. How did you manage to pull that off?',
            },
            {
                type: 'paragraph',
                content: `That's a question we get asked a lot. It's really just a whole bunch of little things that we do that come together in the end. It's a bit like asking a chef to give you the recipe for a Michelin Star dish - I could give you a list of all the different things that went into this, but there's a lot of little details that matter. In our case, the foundation is really our animation system - We don't use keyframes, we have a fully procedural animation system that blends between different poses based on a whole lot of different variables and we spent a great deal of time just making sure that Ori always feels fluid and responsive.`,
            },
            {
                type: 'link',
                text: 'Read the rest of the article here!',
                href: 'https://www.gamedeveloper.com/design/q-a-designing-the-gorgeous-metroidvania-ori-and-the-will-of-the-wisps', // Đường link thực tế
            },
        ],
    },
];
