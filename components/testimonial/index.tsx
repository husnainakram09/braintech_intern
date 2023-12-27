"use client";
import { Box, Grid, GridItem, Text, Image } from "@chakra-ui/react";
import React from "react";
import ReviewCard from "./reviewCard";
import Carousel from "react-multi-carousel";
import { ResponsiveType } from "react-multi-carousel/lib/types";

interface Props {}

const Testimonial: React.FC<Props> = ({}) => {
  const responsive: ResponsiveType = {
    superLargeDesktop: {
      breakpoint: { max: 1400, min: 1201 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 1200, min: 992 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 991, min: 769 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 768, min: 0 },
      items: 1,
    },
  };
  return (
    <Box px={10} py={100} bgColor={"#F6F7F9"}>
      <Grid
        className="testimonial_section"
        gridTemplateColumns={"repeat(2,50%)"}
        gap={10}
      >
        <GridItem>
          <Image alt="img"
            src="/images/testimonial.png"
            minW={"100%"}
            objectFit={"contain"}
          />
        </GridItem>
        <GridItem pr={[0, "50px", "50px"]}>
          <Box>
            <Text>TESTIMONIALS</Text>
            <Text fontSize={"4xl"} fontWeight={700} mt={5}>
              What Customer Saying
            </Text>
            <Text mt={5}>
              Over 25 years working in IT services developing software
              applications and mobile apps for clients all over the world.
            </Text>
          </Box>

          <Box mt={10}>
            <Carousel
              className="review-slider"
              ssr
              arrows={false}
              showDots
              responsive={responsive}
            >
              {Array.from({ length: 8 }).map((_, key) => (
                <ReviewCard key={key} />
              ))}
            </Carousel>
          </Box>
        </GridItem>
      </Grid>
      <Box mt={10}>
        <Carousel
          className="review-slider-sm"
          ssr
          arrows={false}
          showDots
          responsive={responsive}
        >
          {Array.from({ length: 8 }).map((_, key) => (
            <ReviewCard key={key} />
          ))}
        </Carousel>
      </Box>
    </Box>
  );
};

export default Testimonial;
