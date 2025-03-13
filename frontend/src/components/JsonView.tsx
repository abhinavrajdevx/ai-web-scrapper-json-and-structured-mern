const JsonView = ({ data }: { data: any }) => {
  function formatJSON(json: any): string {
    return JSON.stringify(json, null, 2)
      .replace(/(".*?")/g, '<span class="string">$1</span>')
      .replace(/\b(\d+)\b/g, '<span class="number">$1</span>')
      .replace(/\b(true|false)\b/g, '<span class="boolean">$1</span>')
      .replace(/\b(null)\b/g, '<span class="null">$1</span>')
      .replace(/(".*?")(?=:)/g, '<span class="key">$1</span>')
      .replace(/[{}\[\]]/g, '<span class="bracket">$&</span>')
      .replace(/:/g, '<span class="colon">:</span>')
      .replace(/,/g, '<span class="comma">,</span>');
  }
  return (
    <div className="bg-gray-900 backdrop-blur-sm rounded-xl shadow-lg  animate-fade-in">
      <div className="flex items-center gap-2 px-4 py-2 border-b border-gray-800">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
        <span className="text-gray-400 text-sm">data.json</span>
      </div>

      <pre className="p-6 text-sm code-editor overflow-auto">
        <code dangerouslySetInnerHTML={{ __html: formatJSON(data) }}></code>
      </pre>
    </div>
  );
};

export default JsonView;
