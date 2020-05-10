import React from 'react';

function LoadingSimple() {
  return (
    <div className="spinner-border text-warning" role="status">
      <span className="sr-only">Carregando Componente</span>
    </div>
  );
}

export default LoadingSimple;
