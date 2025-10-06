body {
  background-color: #fafafa;
  color: #000000;
  font-family: 'aktiv grotesk', sans-serif;
  margin: 0;
  padding: 40px;
  height: 100vh;
}

#intro {
  max-width: 700px;
  font-size: 1.6rem;
  line-height: 1;
  text-align: left; 
  font-weight: 700;
}

#cursor {
  display: inline-block;
  color: #00aaff;
  animation: blink 0.8s infinite;
}

@keyframes blink {
  50% { opacity: 0; }
}

.link {
  color: #00aaff;
  cursor: pointer;
  text-decoration: none;
  font-weight: 700;
}

.link:hover {
  text-decoration: underline;
