"use client";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import Image from "next/image";
import { motion } from "framer-motion";

import { TestimonialsSection } from "@/components/TestimonialsSection";
import { Gallery } from "@/components/Gallery";
import { VideoModal } from "@/components/VideoModal";
import { Suspense } from "react";

export default function Home() {
  const OPTIONS = { slidesToScroll: 2 };
  const SLIDE_COUNT = 5;
  const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

  return (
    <div
      id="#"
      className="relative flex flex-col flex-1 justify-between h-screen bg-cod-gray-600"
    >
      <Header />
      <div className="px-12 lg:px-32 mt-24 bg-cod-gray-600">
        <BannerSection />
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          exit={{ opacity: 0 }}
          transition={{ duration: 3 }}
          className="flex justify-center mt-24"
        >
          <Image
            alt="icone seta para baixo"
            src="/arrow_down_icon.svg"
            width={29}
            height={29}
          />
        </motion.div>
        <div id="nossa-historia" className="py-14">
          <div className="flex flex-col gap-24 lg:flex-row">
            <motion.img
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              exit={{ opacity: 0 }}
              transition={{ duration: 2 }}
              alt="icone seta para baixo"
              src="/image_placeholder.png"
            />
            <motion.div
              initial={{ translateX: -90, opacity: 0 }}
              whileInView={{ translateX: 0, opacity: 1 }}
              viewport={{ once: true }}
              exit={{ translateX: 0 }}
              transition={{ duration: 2 }}
            >
              <h3 className="text-4xl montserrat">KJ Production</h3>
              <p className="montserrat font-normal mt-8">
                Somos especialistas em marketing digital dedicados a destacar
                médicos no cenário online. Nosso foco é criar conteúdo autêntico
                e envolvente para fortalecer a presença digital de cada médico,
                conectando-os de maneira significativa com seus seguidores e
                pacientes.
              </p>
            </motion.div>
          </div>
        </div>
        <div className="py-14 bg-cod-gray-600">
          <div className="flex flex-col-reverse gap-24 lg:flex-row">
            <motion.div
              initial={{ translateX: -90, opacity: 0 }}
              whileInView={{ translateX: 0, opacity: 1 }}
              viewport={{ once: true }}
              exit={{ translateX: 0 }}
              transition={{ duration: 2 }}
            >
              <h3 className="text-4xl montserrat">O Que Fazemos?</h3>
              <p className="montserrat font-normal mt-8">
                Oferecemos estratégias de engajamento e gestão completa da
                presença digital para impulsionar o alcance e a reputação online
                dos nossos clientes médicos.
              </p>
            </motion.div>
            <motion.img
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              exit={{ opacity: 0 }}
              transition={{ duration: 2 }}
              alt="icone seta para baixo"
              src="/image_placeholder.png"
            />
          </div>
        </div>
        <div id="galeria">
          <Gallery />
        </div>
      </div>
      <TestimonySection />
      <ContactSection />
      <Footer />
      <Suspense>
        <VideoModal />
      </Suspense>
    </div>
  );
}

const BannerSection = () => {
  return (
    <motion.div
      viewport={{ once: true }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="lg:relative mt-20 "
    >
      <img className="w-full" alt="Banner home" src="/banner_home.png" />
      <motion.p
        viewport={{ once: true }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, delay: 0.5 }}
        className="montserrat text-4xl mt-6 lg:absolute lg:left-16 lg:bottom-20 lg:w-96 lg:mt-0"
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
      </motion.p>
    </motion.div>
  );
};

const TestimonySection = () => {
  return (
    <div id="depoimentos" className="px-12 py-14 lg:px-32 bg-cod-gray-600">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        exit={{ opacity: 0 }}
        transition={{ duration: 2 }}
      >
        <h3 className="montserrat text-4xl">Depoimentos</h3>

        <p className="montserrat mt-8">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis quam,
          fugiat quaerat blanditiis enim, architecto tempore placeat quae
          expedita voluptate hic reiciendis mollitia sit necessitatibus
          laudantium officiis sunt eius perspiciatis.
        </p>
        <div className="mt-14">
          <TestimonialsSection />
        </div>
      </motion.div>
    </div>
  );
};

const ContactSection = () => {
  return (
    <div id="contato" className="px-12 py-12 lg:px-32 bg-cod-gray-600">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        exit={{ opacity: 0 }}
        transition={{ duration: 2 }}
      >
        <h3 className="montserrat text-4xl">Fale conosco</h3>
        <p className="montserrat mt-8">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit,
          corporis nemo, nostrum cumque velit culpa ipsam in illo consequuntur
          sequi est similique a minus libero eaque nesciunt, explicabo magni
          odio.
        </p>
      </motion.div>
      <div className="flex items-center justify-between mt-20">
        <motion.div
          initial={{ translateX: -90, opacity: 0 }}
          whileInView={{ translateX: 0, opacity: 1 }}
          viewport={{ once: true }}
          exit={{ opacity: 0 }}
          transition={{ duration: 2 }}
          className="montserrat font-bold text-3xl"
        >
          Clique para entrar em contato
        </motion.div>
        <motion.button
          initial={{ translateY: 90, opacity: 0 }}
          whileInView={{ translateY: 0, opacity: 1 }}
          viewport={{ once: true }}
          exit={{ opacity: 0 }}
          transition={{ duration: 2 }}
          className="shrink-0"
        >
          <Image src="/wpp_contact_icon.svg" width="50" height="50" />
        </motion.button>
      </div>
    </div>
  );
};
