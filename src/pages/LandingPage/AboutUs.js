import React, { useRef } from 'react';
import styled, { keyframes } from 'styled-components';

// Mock data for team members
const teamMembers = [
  { name: 'Tarun Agrawal', role: 'Fullstack Developer', image: '/src/assets/images/.png' },
  { name: 'Tushar kumar sahu', role: 'Fullstack Developer', image: '/tushar.jpeg' },
  { name: 'Shreya Gupta', role: 'Machine learning Developer', image: '/shreya.png' },
  { name: 'Tanishk Gupta', role: 'Data Analyst', image: '/tanishk.jpeg' },
];

// Mock data for reviews
const reviews = [
  { text: 'This platform is a game-changer for green initiatives!', reviewer: 'Alice' },
  { text: 'I love the way it simplifies environmental analysis.', reviewer: 'Bob' },
  { text: 'The team is incredibly supportive and innovative.', reviewer: 'Charlie' },
];

// Keyframes for animations
const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const slideUp = keyframes`
  from { opacity: 0; transform: translateY(40px); }
  to { opacity: 1; transform: translateY(0); }
`;

// Styled-components
const Container = styled.div`
  padding: 20px;
  background-color: #000;
  color: #00ff00;
  font-family: Arial, sans-serif;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 3.5em;
  animation: ${fadeIn} 1s ease-out;
`;

const Subtitle = styled.p`
  font-size: 1.2em;
  color: #a0ffa0;
  margin: 20px auto;
  max-width: 800px;
  animation: ${fadeIn} 1s ease-out;
`;

const ReadMoreButton = styled.button`
  background-color: #00ff00;
  border: none;
  padding: 15px 30px;
  border-radius: 25px;
  color: #000;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s ease;
  animation: ${fadeIn} 1s ease-out;

  &:hover {
    background-color: #00cc00;
  }
`;

const TeamSection = styled.div`
  margin-top: 50px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 40px;
  justify-items: center;
  animation: ${slideUp} 1.5s ease-out;
`;

const Circle = styled.div`
  width: 250px;
  height: 250px;
  border-radius: 50%;
  background-color: #1a1a1a;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  border: 8px solid #00ff00;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.2);
    box-shadow: 0 10px 20px rgba(0, 255, 0, 0.4);
  }
`;

const MemberImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const MemberName = styled.h3`
  color: #00ff00;
  margin-top: 15px;
`;

const MemberRole = styled.p`
  font-size: 1em;
  color: #a0ffa0;
`;

const ExtraContent = styled.div`
  margin-top: 100px;
  padding: 20px;
  background: #111;
  color: #a0ffa0;
  animation: ${fadeIn} 1s ease-out;
`;

const ReviewsSection = styled.div`
  margin-top: 50px;
  background-color: #111;
  padding: 40px 20px;
  text-align: center;
  color: #a0ffa0;
`;

const ReviewTitle = styled.h2`
  font-size: 2.5em;
  margin-bottom: 20px;
  color: #00ff00;
`;

const ReviewBox = styled.div`
  background-color: #1a1a1a;
  margin: 20px auto;
  padding: 20px;
  max-width: 600px;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 255, 0, 0.3);
`;

const ReviewText = styled.p`
  color: #a0ffa0;
  font-style: italic;
`;

const Reviewer = styled.span`
  display: block;
  font-weight: bold;
  color: #00ff00;
  margin-top: 10px;
`;

const AboutUs = () => {
  const extraContentRef = useRef(null);

  const scrollToExtraContent = () => {
    extraContentRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Container>
      <Title>Welcome to Our Platform</Title>
      <Subtitle>
        Our platform is dedicated to leveraging cutting-edge technology for environmental conservation.
        We provide tools to analyze satellite imagery, count trees, assess green areas, and optimize
        paths for eco-friendly development. Our mission is to empower organizations and individuals
        with actionable insights that contribute to a sustainable future. With an expert team of
        developers, designers, and data scientists, we aim to bridge the gap between technology and
        nature, ensuring a healthier planet for generations to come.
      </Subtitle>
      <ReadMoreButton onClick={scrollToExtraContent}>Read More</ReadMoreButton>

      <TeamSection>
        {teamMembers.map((member, index) => (
          <div key={index}>
            <Circle>
              <MemberImage src={member.image} alt={`${member.name}`} />
            </Circle>
            <MemberName>{member.name}</MemberName>
            <MemberRole>{member.role}</MemberRole>
          </div>
        ))}
      </TeamSection>

      <div ref={extraContentRef}>
        <ExtraContent>
          <h2>More About Us</h2>
          <p>
            Our tools utilize advanced geospatial technology to make environmental conservation
            actionable and effective. With real-time satellite data and sophisticated algorithms,
            we provide a detailed view of deforestation patterns, urban encroachment, and green
            area development. By engaging with our platform, users can contribute to impactful
            decision-making processes, ensuring that the beauty and resources of nature are preserved
            for future generations.
          </p>
        </ExtraContent>
      </div>

      <ReviewsSection>
        <ReviewTitle>What People Say About Us</ReviewTitle>
        {reviews.map((review, index) => (
          <ReviewBox key={index}>
            <ReviewText>"{review.text}"</ReviewText>
            <Reviewer>- {review.reviewer}</Reviewer>
          </ReviewBox>
        ))}
      </ReviewsSection>
    </Container>
  );
};

export default AboutUs;
