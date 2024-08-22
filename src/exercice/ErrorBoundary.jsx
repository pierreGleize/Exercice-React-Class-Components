import { Component } from "react";

class ErrorBoundary extends Component {
    constructor(props) {
      super(props);
      this.state = { hasError: false };
    }
  
    static getDerivedStateFromError(error) {
      // On met à jour l’état afin que le prochain rendu affiche
      // l’UI de remplacement.
      return { hasError: true };
    }
  
    // componentDidCatch(error, info) {
      // Exemple de `componentStack` :
      //   in ComponentThatThrows (created by App)
      //   in ErrorBoundary (created by App)
      //   in div (created by App)
      //   in App
    //   logComponentStackToMyService(info.componentStack);
    // }
  
    render() {
      if (this.state.hasError) {
        
        return (
            <div className="col bg-danger">
                 <p style={{color: "#fff"}}>Oups, il y a un problème.</p>
            </div>
            
        )
      }
  
      return this.props.children;
    }
  }

  export default ErrorBoundary;