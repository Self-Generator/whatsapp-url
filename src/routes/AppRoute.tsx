import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Header } from "../components/Header"
import { Form } from "../pages/Form"
import { Generate } from "../pages/Generated"
import { Home } from "../pages/Home"

export const AppRoute = () => {
    return (
        <div>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path="/whatsapp-url/" element={<Home />} />
                    <Route path="/whatsapp-url/Form" element={<Form />} />
                    <Route path="/whatsapp-url/generate" element={<Generate />} />
                    <Route path="/whatsapp-url/generate/*" element={<Generate />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}