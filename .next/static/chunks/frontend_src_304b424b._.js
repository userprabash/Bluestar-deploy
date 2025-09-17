(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/frontend/src/Style/Contact.module.scss [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "active": "Contact-module-scss-module__-UT5jW__active",
  "btnStyle2": "Contact-module-scss-module__-UT5jW__btnStyle2",
  "colMd6": "Contact-module-scss-module__-UT5jW__colMd6",
  "contactForm": "Contact-module-scss-module__-UT5jW__contactForm",
  "contactFormBtn": "Contact-module-scss-module__-UT5jW__contactFormBtn",
  "custCheck": "Contact-module-scss-module__-UT5jW__custCheck",
  "custCheckbox": "Contact-module-scss-module__-UT5jW__custCheckbox",
  "custCheckboxLabel": "Contact-module-scss-module__-UT5jW__custCheckboxLabel",
  "disabled": "Contact-module-scss-module__-UT5jW__disabled",
  "fieldCol": "Contact-module-scss-module__-UT5jW__fieldCol",
  "fieldLabel": "Contact-module-scss-module__-UT5jW__fieldLabel",
  "fieldRow": "Contact-module-scss-module__-UT5jW__fieldRow",
  "formInput": "Contact-module-scss-module__-UT5jW__formInput",
  "formTextarea": "Contact-module-scss-module__-UT5jW__formTextarea",
  "heightMd100": "Contact-module-scss-module__-UT5jW__heightMd100",
  "loginRead": "Contact-module-scss-module__-UT5jW__loginRead",
  "opacity50": "Contact-module-scss-module__-UT5jW__opacity50",
  "sectionCapture": "Contact-module-scss-module__-UT5jW__sectionCapture",
  "sectionHeading": "Contact-module-scss-module__-UT5jW__sectionHeading",
});
}),
"[project]/frontend/src/Home-Components/Contactform.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$Style$2f$Contact$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/frontend/src/Style/Contact.module.scss [app-client] (css module)"); // Import the CSS Module
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
const ContactForm = ()=>{
    _s();
    // State for form fields
    const [formData, setFormData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        name: "",
        email: "",
        phone: "",
        message: ""
    });
    // State for the agreement checkbox
    const [agreed, setAgreed] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // State for submission status
    const [status, setStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    // Handler for text input changes
    const handleChange = (e)=>{
        const { name, value } = e.target;
        setFormData((prevData)=>({
                ...prevData,
                [name]: value
            }));
    };
    // Handler for form submission
    const handleSubmit = async (e)=>{
        e.preventDefault();
        if (!agreed) {
            setStatus("You must agree to the rules & policies.");
            return;
        }
        setStatus("Submitting...");
        console.log("Form Data Submitted:", formData);
        // For demonstration purposes:
        setTimeout(()=>{
            setStatus("Message sent successfully!");
        }, 1000);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$Style$2f$Contact$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].contactForm,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$Style$2f$Contact$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].sectionCapture,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$Style$2f$Contact$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].sectionHeading,
                        children: "Reach out today"
                    }, void 0, false, {
                        fileName: "[project]/frontend/src/Home-Components/Contactform.jsx",
                        lineNumber: 50,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/frontend/src/Home-Components/Contactform.jsx",
                    lineNumber: 49,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                    onSubmit: handleSubmit,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$Style$2f$Contact$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].fieldRow,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "".concat(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$Style$2f$Contact$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].fieldCol, " ").concat(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$Style$2f$Contact$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].colMd6),
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$Style$2f$Contact$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].fieldRow,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$Style$2f$Contact$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].fieldCol,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        htmlFor: "name",
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$Style$2f$Contact$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].fieldLabel,
                                                        children: "Name"
                                                    }, void 0, false, {
                                                        fileName: "[project]/frontend/src/Home-Components/Contactform.jsx",
                                                        lineNumber: 60,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "text",
                                                        id: "name",
                                                        name: "name",
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$Style$2f$Contact$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].formInput,
                                                        placeholder: "Full name",
                                                        value: formData.name,
                                                        onChange: handleChange,
                                                        required: true
                                                    }, void 0, false, {
                                                        fileName: "[project]/frontend/src/Home-Components/Contactform.jsx",
                                                        lineNumber: 63,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/frontend/src/Home-Components/Contactform.jsx",
                                                lineNumber: 59,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$Style$2f$Contact$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].fieldCol,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        htmlFor: "email",
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$Style$2f$Contact$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].fieldLabel,
                                                        children: "Email"
                                                    }, void 0, false, {
                                                        fileName: "[project]/frontend/src/Home-Components/Contactform.jsx",
                                                        lineNumber: 76,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "email",
                                                        id: "email",
                                                        name: "email",
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$Style$2f$Contact$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].formInput,
                                                        placeholder: "Email",
                                                        value: formData.email,
                                                        onChange: handleChange,
                                                        required: true
                                                    }, void 0, false, {
                                                        fileName: "[project]/frontend/src/Home-Components/Contactform.jsx",
                                                        lineNumber: 79,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/frontend/src/Home-Components/Contactform.jsx",
                                                lineNumber: 75,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$Style$2f$Contact$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].fieldCol,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        htmlFor: "phone",
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$Style$2f$Contact$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].fieldLabel,
                                                        children: "Phone number"
                                                    }, void 0, false, {
                                                        fileName: "[project]/frontend/src/Home-Components/Contactform.jsx",
                                                        lineNumber: 92,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "text",
                                                        id: "phone",
                                                        name: "phone",
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$Style$2f$Contact$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].formInput,
                                                        placeholder: "Phone number",
                                                        value: formData.phone,
                                                        onChange: handleChange
                                                    }, void 0, false, {
                                                        fileName: "[project]/frontend/src/Home-Components/Contactform.jsx",
                                                        lineNumber: 95,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/frontend/src/Home-Components/Contactform.jsx",
                                                lineNumber: 91,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/frontend/src/Home-Components/Contactform.jsx",
                                        lineNumber: 57,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/frontend/src/Home-Components/Contactform.jsx",
                                    lineNumber: 56,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "".concat(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$Style$2f$Contact$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].fieldCol, " ").concat(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$Style$2f$Contact$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].colMd6),
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$Style$2f$Contact$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].fieldCol,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                htmlFor: "message",
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$Style$2f$Contact$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].fieldLabel,
                                                children: "Message"
                                            }, void 0, false, {
                                                fileName: "[project]/frontend/src/Home-Components/Contactform.jsx",
                                                lineNumber: 111,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                rows: "5",
                                                id: "message",
                                                name: "message",
                                                className: "".concat(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$Style$2f$Contact$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].formTextarea, " ").concat(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$Style$2f$Contact$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].heightMd100),
                                                placeholder: "Message",
                                                value: formData.message,
                                                onChange: handleChange,
                                                required: true
                                            }, void 0, false, {
                                                fileName: "[project]/frontend/src/Home-Components/Contactform.jsx",
                                                lineNumber: 114,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/frontend/src/Home-Components/Contactform.jsx",
                                        lineNumber: 110,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/frontend/src/Home-Components/Contactform.jsx",
                                    lineNumber: 109,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/frontend/src/Home-Components/Contactform.jsx",
                            lineNumber: 54,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$Style$2f$Contact$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].contactFormBtn,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$Style$2f$Contact$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].fieldRow,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "".concat(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$Style$2f$Contact$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].fieldCol, " ").concat(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$Style$2f$Contact$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].colMd6),
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$Style$2f$Contact$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].custCheckboxLabel,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "checkbox",
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$Style$2f$Contact$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].custCheckbox,
                                                    checked: agreed,
                                                    onChange: (e)=>setAgreed(e.target.checked)
                                                }, void 0, false, {
                                                    fileName: "[project]/frontend/src/Home-Components/Contactform.jsx",
                                                    lineNumber: 134,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$Style$2f$Contact$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].custCheck
                                                }, void 0, false, {
                                                    fileName: "[project]/frontend/src/Home-Components/Contactform.jsx",
                                                    lineNumber: 140,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$Style$2f$Contact$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].loginRead,
                                                    children: [
                                                        "I agree to the ",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                            href: "#",
                                                            children: "rules & policies"
                                                        }, void 0, false, {
                                                            fileName: "[project]/frontend/src/Home-Components/Contactform.jsx",
                                                            lineNumber: 142,
                                                            columnNumber: 36
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        " and acknowledge that my info will be stored safely following the data guidelines."
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/frontend/src/Home-Components/Contactform.jsx",
                                                    lineNumber: 141,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/frontend/src/Home-Components/Contactform.jsx",
                                            lineNumber: 133,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/src/Home-Components/Contactform.jsx",
                                        lineNumber: 132,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$Style$2f$Contact$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].fieldCol,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "submit",
                                            className: "".concat(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$Style$2f$Contact$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].btnStyle2, " ").concat(agreed ? __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$Style$2f$Contact$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].active : __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$Style$2f$Contact$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].disabled),
                                            disabled: !agreed,
                                            children: "Submit now"
                                        }, void 0, false, {
                                            fileName: "[project]/frontend/src/Home-Components/Contactform.jsx",
                                            lineNumber: 150,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/src/Home-Components/Contactform.jsx",
                                        lineNumber: 149,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/frontend/src/Home-Components/Contactform.jsx",
                                lineNumber: 130,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/frontend/src/Home-Components/Contactform.jsx",
                            lineNumber: 129,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        status && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            style: {
                                textAlign: "center",
                                marginTop: "20px"
                            },
                            children: status
                        }, void 0, false, {
                            fileName: "[project]/frontend/src/Home-Components/Contactform.jsx",
                            lineNumber: 165,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/frontend/src/Home-Components/Contactform.jsx",
                    lineNumber: 53,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/frontend/src/Home-Components/Contactform.jsx",
            lineNumber: 48,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/frontend/src/Home-Components/Contactform.jsx",
        lineNumber: 47,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(ContactForm, "BRyZWWJ0IQ21wGFU6RP2z2Xklks=");
_c = ContactForm;
const __TURBOPACK__default__export__ = ContactForm;
var _c;
__turbopack_context__.k.register(_c, "ContactForm");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=frontend_src_304b424b._.js.map