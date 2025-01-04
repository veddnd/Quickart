import React from "react";

const SignInDialog = ({ open, onClose, onSignIn }) => {
    if (!open) return null;

    return (
        <div className="dialog-overlay">
            <div className="dialog-box">
                <h3>Sign In Required</h3>
                <p>You need to sign in to access this feature.</p>
                <button onClick={onSignIn} className="bxc btn btn-primary">
                    Sign In
                </button>
                <button onClick={onClose} className="btn btn-secondary">
                    Cancel
                </button>
            </div>
        </div>
    );
};

export default SignInDialog;
